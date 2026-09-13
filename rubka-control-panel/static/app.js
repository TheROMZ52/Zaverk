const $=id=>document.getElementById(id);let cache={};
function esc(s){return String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function avatar(c){
  if(c.profile) return `<img class="avatar" src="${esc(c.profile)}" alt="">`;
  const letter=String(c.name||c.chat_id||'?').trim().charAt(0).toUpperCase();
  return `<div class="avatar fallback">${esc(letter||'?')}</div>`;
}
function render(){
  const chats=cache.chats||[];
  const q=$('search').value.trim().toLowerCase();
  $('in').textContent=cache.received_count||0;
  $('out').textContent=cache.sent_count||0;
  $('chatsCount').textContent=chats.length;
  $('tasks').textContent=(cache.active_tasks||[]).length;
  $('status').textContent=cache.online?'● آنلاین':'● آفلاین';
  $('status').style.color=cache.online?'#66e3c4':'#ff7e8e';
  $('chatList').innerHTML='';
  const filtered=chats.filter(c=>(c.name+' '+c.chat_id+' '+c.username).toLowerCase().includes(q));
  if(!filtered.length)$('chatList').innerHTML='<div class="empty">هنوز چتی دیده نشده</div>';
  filtered.forEach(c=>{
    const d=document.createElement('div');
    d.className='chat';
    d.innerHTML=`${avatar(c)}<div class="chatInfo"><b>${esc(c.name)}</b><small>${esc(c.username||c.type||'')} · ${esc(c.chat_id)}</small></div>`;
    d.onclick=()=>{
      $('chatId').value=c.chat_id;
      $('selectedChat').innerHTML=`${avatar(c)}<span>${esc(c.name)}<small>${esc(c.username||c.chat_id)}</small></span>`;
      $('text').focus();
    };
    $('chatList').appendChild(d);
  });
  const msgs=cache.messages||[];
  $('stream').innerHTML='';
  if(!msgs.length)$('stream').innerHTML='<div class="empty">منتظر پیام جدید...</div>';
  msgs.slice().reverse().forEach(m=>{
    const d=document.createElement('div');
    d.className='msg '+(m.direction==='out'?'out':'');
    d.innerHTML=`<small>${m.direction==='out'?'ارسال':'دریافت'} · ${esc(m.chat_id)}</small><div>${esc(m.text)}</div>`;
    $('stream').appendChild(d);
  });
}
async function refresh(){
  try{
    const r=await fetch('/api/state',{cache:'no-store'});
    cache=await r.json();
    render();
  }catch(e){
    $('status').textContent='● قطع ارتباط';
    $('status').style.color='#ff7e8e';
  }
}
$('search').addEventListener('input',render);
$('send').onclick=async()=>{
  const body={chat_id:$('chatId').value.trim(),text:$('text').value.trim(),delay:Number($('delay').value),count:Number($('count').value)};
  $('error').textContent='';
  if(!body.chat_id||!body.text){$('error').textContent='Chat ID و متن پیام را وارد کن.';return}
  try{
    const r=await fetch('/api/send',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
    if(!r.ok)throw new Error('request failed');
    $('text').value='';
    refresh();
  }catch(e){$('error').textContent='ارسال ناموفق بود.'}
};
$('stop').onclick=async()=>{await fetch('/api/stop',{method:'POST'});refresh()};
refresh();
setInterval(refresh,500);
