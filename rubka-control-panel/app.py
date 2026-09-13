import asyncio
import inspect
import json
import shlex
import os
from collections import OrderedDict
from datetime import datetime, timezone
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field
import uvicorn
from rubka import Robot, Message

# Local fallback token requested for this project. RUBKA_TOKEN overrides it when set.
TOKEN = os.getenv("RUBKA_TOKEN", "BJEBHF0EPLDYJAYEQQPNPMZMKUJIIBMSSCNRAQAHUOHLGIGAEADIBUZVOCJDTYSP")
HOST, PORT = "0.0.0.0", 8080
MAX_MESSAGES, MAX_CHATS, MAX_SEND_COUNT, MIN_DELAY = 400, 100, 100, 1.0
BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR / "static"
DATA_FILE = BASE_DIR / "chats.json"

bot = Robot(token=TOKEN)
app = FastAPI(title="Rubka Control Panel")
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

state = {
    "started_at": None,
    "messages": [],
    "chats": OrderedDict(),
    "active_tasks": {},
    "sent_count": 0,
    "received_count": 0,
    "last_error": None,
}


def now_iso():
    return datetime.now(timezone.utc).isoformat()


def load_chats():
    """Load known chats from disk so they survive a bot restart."""
    try:
        if not DATA_FILE.exists():
            return
        raw = json.loads(DATA_FILE.read_text(encoding="utf-8"))
        if not isinstance(raw, list):
            return
        for chat in raw[-MAX_CHATS:]:
            if isinstance(chat, dict) and chat.get("chat_id"):
                chat_id = str(chat["chat_id"])
                chat["chat_id"] = chat_id
                state["chats"][chat_id] = chat
    except Exception as e:
        state["last_error"] = f"chat storage: {e}"


def save_chats():
    """Persist the current chat directory atomically."""
    tmp = DATA_FILE.with_suffix(".tmp")
    tmp.write_text(
        json.dumps(list(state["chats"].values()), ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    tmp.replace(DATA_FILE)


async def call_bot(method, *args, **kwargs):
    fn = getattr(bot, method)
    return await fn(*args, **kwargs) if inspect.iscoroutinefunction(fn) else await asyncio.to_thread(fn, *args, **kwargs)


def attr(obj, *names, default=None):
    for name in names:
        value = getattr(obj, name, None)
        if value not in (None, ""):
            return value
    return default


async def resolve_chat(chat_id):
    """Fetch the latest available name/profile metadata from Rubka."""
    chat_id = str(chat_id)
    cached = state["chats"].get(chat_id, {})
    try:
        data = await call_bot("get_chat", chat_id)
        if isinstance(data, dict):
            return {
                "chat_id": chat_id,
                "name": data.get("title") or data.get("name") or data.get("first_name") or data.get("username") or cached.get("name") or chat_id,
                "username": data.get("username") or cached.get("username") or "",
                "type": data.get("type") or data.get("chat_type") or cached.get("type") or "unknown",
                "profile": data.get("photo") or data.get("avatar") or data.get("profile") or data.get("profile_photo") or cached.get("profile") or "",
                "updated_at": now_iso(),
            }
    except Exception as e:
        return {
            "chat_id": chat_id,
            "name": cached.get("name") or chat_id,
            "username": cached.get("username") or "",
            "type": cached.get("type") or "unknown",
            "profile": cached.get("profile") or "",
            "updated_at": now_iso(),
            "lookup_error": str(e),
        }

    return {
        "chat_id": chat_id,
        "name": cached.get("name") or chat_id,
        "username": cached.get("username") or "",
        "type": cached.get("type") or "unknown",
        "profile": cached.get("profile") or "",
        "updated_at": now_iso(),
    }


def remember_chat(chat_id, name=None, username=None, chat_type=None, profile=None):
    chat_id = str(chat_id)
    current = state["chats"].get(chat_id, {})
    state["chats"][chat_id] = {
        "chat_id": chat_id,
        "name": name or current.get("name") or chat_id,
        "username": username or current.get("username") or "",
        "type": chat_type or current.get("type") or "unknown",
        "profile": profile or current.get("profile") or "",
        "updated_at": now_iso(),
    }
    state["chats"].move_to_end(chat_id)
    while len(state["chats"]) > MAX_CHATS:
        state["chats"].popitem(last=False)
    save_chats()


def add_message(chat_id, text, direction, sender_id=""):
    state["messages"].append({
        "id": f"{now_iso()}-{len(state['messages'])}",
        "chat_id": chat_id,
        "text": text or "",
        "direction": direction,
        "sender_id": sender_id or "",
        "time": now_iso(),
    })
    if len(state["messages"]) > MAX_MESSAGES:
        del state["messages"][:-MAX_MESSAGES]


@bot.on_message()
async def on_message(bot_instance: Robot, message: Message):
    try:
        chat_id = str(attr(message, "chat_id", default="UNKNOWN"))
        text = attr(message, "text", "message", default="")
        sender_id = attr(message, "sender_id", default="")

        state["received_count"] += 1
        remember_chat(chat_id)

        # Refresh metadata on every incoming message.
        resolved = await resolve_chat(chat_id)
        remember_chat(
            chat_id,
            resolved.get("name"),
            resolved.get("username"),
            resolved.get("type"),
            resolved.get("profile"),
        )

        add_message(chat_id, text, "in", sender_id)
        print(f"[IN] {chat_id}: {text}")
    except Exception as e:
        state["last_error"] = str(e)


async def send_messages(chat_id, delay, count, text):
    chat_id = str(chat_id)
    task_id = f"{chat_id}_{id(asyncio.current_task())}"
    state["active_tasks"][task_id] = {
        "chat_id": chat_id,
        "count": count,
        "sent": 0,
        "started_at": now_iso(),
    }
    remember_chat(chat_id)

    try:
        for i in range(1, count + 1):
            if task_id not in state["active_tasks"]:
                return
            await call_bot("send_message", chat_id=chat_id, text=text)
            state["sent_count"] += 1
            state["active_tasks"][task_id]["sent"] = i
            add_message(chat_id, text, "out")
            remember_chat(chat_id)
            if i < count:
                await asyncio.sleep(delay)
    except Exception as e:
        state["last_error"] = str(e)
    finally:
        state["active_tasks"].pop(task_id, None)


class SendRequest(BaseModel):
    chat_id: str = Field(min_length=1, max_length=200)
    text: str = Field(min_length=1, max_length=4000)
    delay: float = Field(default=1.0, ge=1.0, le=3600.0)
    count: int = Field(default=1, ge=1, le=100)


@app.get("/")
async def index():
    return FileResponse(STATIC_DIR / "index.html")


@app.get("/api/state")
async def get_state():
    return {
        "online": True,
        "started_at": state["started_at"],
        "received_count": state["received_count"],
        "sent_count": state["sent_count"],
        "last_error": state["last_error"],
        "active_tasks": [{"task_id": k, **v} for k, v in state["active_tasks"].items()],
        "chats": list(reversed(list(state["chats"].values()))),
        "messages": state["messages"][-200:],
    }


@app.post("/api/send")
async def send(req: SendRequest):
    asyncio.create_task(send_messages(req.chat_id, req.delay, req.count, req.text))
    return {"ok": True}


@app.post("/api/stop")
async def stop_all():
    state["active_tasks"].clear()
    return {"ok": True}


@app.get("/api/chat/{chat_id}")
async def chat_detail(chat_id: str):
    chat_id = str(chat_id)
    if chat_id not in state["chats"]:
        raise HTTPException(404, "Chat not found")
    detail = await resolve_chat(chat_id)
    remember_chat(
        chat_id,
        detail.get("name"),
        detail.get("username"),
        detail.get("type"),
        detail.get("profile"),
    )
    return state["chats"][chat_id]


async def console():
    print(f"Web panel: http://127.0.0.1:{PORT}")
    while True:
        try:
            args = shlex.split(await asyncio.to_thread(input, "> "))
            if not args:
                continue
            if args[0].lower() == "/send" and len(args) >= 5:
                chat_id, delay, count, text = args[1], float(args[2]), int(args[3]), " ".join(args[4:])
                if delay < MIN_DELAY or count > MAX_SEND_COUNT:
                    print("[ERROR] delay >= 1 and count <= 100")
                    continue
                asyncio.create_task(send_messages(chat_id, delay, count, text))
            elif args[0].lower() == "/stop":
                state["active_tasks"].clear()
            elif args[0].lower() == "/status":
                print(f"IN={state['received_count']} OUT={state['sent_count']} CHATS={len(state['chats'])} ACTIVE={len(state['active_tasks'])}")
            elif args[0].lower() == "/help":
                print("/send <chat_id> <delay> <count> <message> | /stop | /status | /help")
        except (KeyboardInterrupt, EOFError):
            return
        except Exception as e:
            state["last_error"] = str(e)


async def run_web():
    await uvicorn.Server(uvicorn.Config(app, host=HOST, port=PORT, log_level="warning")).serve()


async def main():
    load_chats()
    state["started_at"] = now_iso()
    await asyncio.gather(bot.run(), run_web(), console())


if __name__ == "__main__":
    asyncio.run(main())
