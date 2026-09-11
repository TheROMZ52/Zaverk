(function(){
'use strict';

const extraFa={
  "سلام دوست من":"Šævra Drøk Në","صبح بخیر":"Ræva Mëla","شب بخیر":"Nøkt Mëla","خوش آمدی":"Kelmï Mëla","خوش آمدید":"Kelmët Mëla","لطفاً":"Vëla","لطفا":"Vëla","ممنون":"Thëra","ممنونم":"Thëra","متشکرم":"Thërava","خواهش می‌کنم":"Næra","ببخشید":"Sërna",
  "آدم":"Mara","مرد":"Dren","زن":"Vela","بچه":"Neliar","پسر":"Dreni","دختر":"Veli","مردم":"Maren","شخص":"Mara","دوست من":"Drøk Në","دشمن":"Varg","برادر":"Brën","خواهر":"Sëla","پدر":"Fadar","مادر":"Madar","خانواده":"Fämra","همه":"Alra","کسی":"Kësi","چیزی":"Sëni",
  "دنیا":"Dæra","جهان":"Dæran","کشور":"Kantar","روستا":"Vila","خیابان":"Stra","مدرسه":"Skola","دانشگاه":"Univers","اتاق":"Ruma","در":"Dør","پنجره":"Fenes","ماشین":"Kar","قطار":"Trena","هواپیما":"Aira","کشتی":"Nava","جاده":"Ruda","مغازه":"Bazar","فروشگاه":"Bazar","رستوران":"Resta","پارک":"Parka",
  "غذا":"Maraş","نان":"Brød","گوشت":"Meza","ماهی":"Fisk","میوه":"Fräta","سیب":"Äpël","چای":"Teva","قهوه":"Kava","شیر":"Mëlka","نمک":"Säl","شکر":"Sëkra","گرسنه":"Hunë","تشنه":"Drësta",
  "رنگ":"Kolra","قرمز":"Röda","آبی":"Bläva","سبز":"Grëna","زرد":"Gëla","سفید":"Hvita","سیاه":"Svarta","خاکستری":"Gråna","طلایی":"Golta","نقره‌ای":"Sëlva",
  "امروز":"Tæna","فردا":"Tömra","دیروز":"Yæra","الان":"Nava","بعداً":"Töra","اینجا":"Hira","آنجا":"Hëra","بالا":"Üra","پایین":"Nöra","چپ":"Vëra","راست":"Dëra","داخل":"Inra","بیرون":"Outra",
  "یک":"Ena","دو":"Dua","سه":"Tria","چهار":"Kvara","پنج":"Pënta","شش":"Sëxa","هفت":"Sëva","هشت":"Oxta","نه":"Næa","ده":"Dëka","صفر":"Zëra",
  "زمان":"Tïma","روزها":"Ræven","لحظه":"Mënt","سال":"Yära","ماه":"Mëra","هفته":"Vëka","ساعت":"Klock","دقیقه":"Mina","ثانیه":"Sëk",
  "آرام":"Sëla","خوشحال":"Glæda","غمگین":"Trista","عصبانی":"Raga","ترسیده":"Færa","خسته":"Töra","تنها":"Sola","آماده":"Rëda","مهم":"Vära","ساده":"Sïma","سخت":"Harda","زیبا":"Bëla","زشت":"Ugla","جدید":"Nóva","قدیمی":"Vëlda","سرد":"Këla","گرم":"Vara","تمیز":"Rëna","کثیف":"Dërga",
  "کار":"Arba","کار کردن":"Arban","زندگی":"Lïva","زندگی کردن":"Lïvan","مرگ":"Mör","کمک":"Hëlpa","کمک کردن":"Hëlpan","شروع":"Stärta","شروع کردن":"Stärtan","تمام":"Fïna","تمام کردن":"Fïnan","باز کردن":"Öpna","بستن":"Stënga","خریدن":"Köp","فروختن":"Sëla","دادن":"Gëva","گرفتن":"Tëka","گذاشتن":"Sëta","برداشتن":"Tära","خواندن":"Lësa","نوشتن":"Skrïva","یاد گرفتن":"Lärna","دانستن":"Vëta","فهمیدن":"Förna","فکر کردن":"Tänka","خواستن":"Vïlja","توانستن":"Kunna","لازم بودن":"Mësta","صبر کردن":"Vänta","منتظر بودن":"Vänta","پرسیدن":"Fråga","جواب دادن":"Svar","شنیدن":"Höra","صحبت کردن":"Tala","خوابیدن":"Sova","بیدار شدن":"Vakna","دویدن":"Runa","راه رفتن":"Gåra","نشستن":"Sëta","ایستادن":"Ställa","خندیدن":"Skrata","گریه کردن":"Gråta",
  "تکنولوژی":"Tekra","کامپیوتر":"Kompa","لپ‌تاپ":"Laptopa","گوشی":"Moba","اینترنت":"Netra","سایت":"Sita","وب":"Weba","بازی آنلاین":"VæƵ Netra","سرور":"Serva","کد":"Koda","برنامه":"Appa","فایل":"Fïla","گیت‌هاب":"Gitra","هوش مصنوعی":"AIra","ربات":"Roba","داده":"Dæta","رمز":"Këya","حساب":"Akaunt",
  "هرگز":"Nëvar","همیشه":"Alvë","گاهی":"Sëma","زیاد":"Mara","کم":"Nëli","بیشتر":"Möra","کمتر":"Nëra","خیلی":"Vära","فقط":"Sola","هم":"Oma","اما":"Ama","و":"Va","یا":"Vaor","اگر":"Ira","چون":"Köra","که":"Ke","برای":"Föra","با":"Mä","بدون":"Nëmba","از":"Da","به":"To","در":"In","روی":"Ona","زیر":"Nöra","قبل":"Prë","بعد":"Eft","منم":"Nëma","تو هم":"Vüma",
  "برگشتم":"Vela-Rëna","کانال":"Kanäla","اینجا هستم":"Hira Bë","منتظرم":"Vänta"
};
Object.assign(faDict,extraFa);

const enToZv={
  hello:'Šævra',hi:'Šævra',greetings:'Ðøren',welcome:'Kelm Mëla',goodbye:'Krävul',bye:'Krävul',please:'Vëla',thanks:'Thëra',thank:'Thëra',sorry:'Sërna',
  i:'Në',me:'Në',my:'de Në',mine:'de Në',you:'Vü',your:'de Vü',yours:'de Vü',he:'Ën',she:'Ën',his:'de Ën',her:'de Ën',they:'Ënra',their:'de Ënra',we:'Nëm',our:'de Nëm',us:'Nëm',
  friend:'Drøk',friends:'Drøken',enemy:'Varg',brother:'Brën',sister:'Sëla',father:'Fadar',mother:'Madar',family:'Fämra',person:'Mara',people:'Maren',man:'Dren',woman:'Vela',boy:'Dreni',girl:'Veli',child:'Neliar',
  home:'Käv',house:'Käv',room:'Ruma',door:'Dør',window:'Fenes',city:'Şevar',village:'Vila',country:'Kantar',world:'Dæra',earth:'Zæn',sky:'Aşra',street:'Stra',road:'Ruda',school:'Skola',university:'Univers',shop:'Bazar',store:'Bazar',restaurant:'Resta',park:'Parka',
  water:'Ulv',fire:'Røk',food:'Maraş',bread:'Brød',meat:'Meza',fish:'Fisk',fruit:'Fräta',apple:'Äpël',tea:'Teva',coffee:'Kava',milk:'Mëlka',salt:'Säl',sugar:'Sëkra',
  red:'Röda',blue:'Bläva',green:'Grëna',yellow:'Gëla',white:'Hvita',black:'Svarta',gray:'Gråna',gold:'Golta',silver:'Sëlva',
  good:'Mëla',bad:'Durg',big:'Grön',small:'Neli',fast:'Sæva',slow:'Toma',strange:'Qæzar',strong:'Bruk',weak:'Løven',happy:'Glæda',sad:'Trista',angry:'Raga',afraid:'Færa',tired:'Töra',alone:'Sola',ready:'Rëda',important:'Vära',simple:'Sïma',hard:'Harda',beautiful:'Bëla',ugly:'Ugla',new:'Nóva',old:'Vëlda',cold:'Këla',hot:'Vara',clean:'Rëna',dirty:'Dërga',calm:'Sëla',
  today:'Tæna',tomorrow:'Tömra',yesterday:'Yæra',now:'Nava',later:'Töra',here:'Hira',there:'Hëra',up:'Üra',down:'Nöra',left:'Vëra',right:'Dëra',inside:'Inra',outside:'Outra',
  one:'Ena',two:'Dua',three:'Tria',four:'Kvara',five:'Pënta',six:'Sëxa',seven:'Sëva',eight:'Oxta',nine:'Næa',ten:'Dëka',zero:'Zëra',
  time:'Tïma',day:'Ræva',days:'Ræven',night:'Nøkt',week:'Vëka',month:'Mëra',year:'Yära',hour:'Klock',minute:'Mina',second:'Sëk',moment:'Mënt',
  go:'Varn',went:'Varnø',going:'Varna',goes:'Varnor',come:'Kelm',came:'Kelmø',coming:'Kelmæ',see:'Dævr',eat:'Xøra',drink:'Nuvş',build:'Sæk',have:'Dær',love:'Drøklæv',say:'Ƶær',be:'Bë',am:'Bë',are:'Bë',is:'Bë',was:'Bë',were:'Bë',will:'Varnul',
  work:'Arba',working:'Arban',live:'Lïva',living:'Lïvan',die:'Mör',help:'Hëlpa',start:'Stärta',finish:'Fïna',open:'Öpna',close:'Stënga',buy:'Köp',sell:'Sëla',give:'Gëva',take:'Tëka',put:'Sëta',read:'Lësa',write:'Skrïva',learn:'Lärna',know:'Vëta',understand:'Förna',think:'Tänka',want:'Vïlja',can:'Kunna',need:'Mësta',wait:'Vänta',ask:'Fråga',answer:'Svar',hear:'Höra',speak:'Tala',sleep:'Sova',wake:'Vakna',run:'Runa',walk:'Gåra',sit:'Sëta',stand:'Ställa',laugh:'Skrata',cry:'Gråta',
  technology:'Tekra',computer:'Kompa',laptop:'Laptopa',phone:'Moba',internet:'Netra',website:'Sita',web:'Weba',server:'Serva',code:'Koda',app:'Appa',file:'Fïla',github:'Gitra',ai:'AIra',robot:'Roba',data:'Dæta',password:'Këya',account:'Akaunt',game:'VæƵ',play:'VæƵ',online:'Netra',
  no:'Næ',yes:'Ära',not:'Næ',never:'Nëvar',always:'Alvë',sometimes:'Sëma',many:'Mara',few:'Nëli',more:'Möra',less:'Nëra',very:'Vära',only:'Sola',also:'Oma',and:'Va',or:'Vaor',but:'Ama',if:'Ira',because:'Köra',that:'Ke',for:'Föra',with:'Mä',without:'Nëmba',from:'Da',to:'To',in:'In',on:'Ona',under:'Nöra',before:'Prë',after:'Eft',
  "let’s":'Vrëm',"let's":'Vrëm',"i love you":'Në Vü Drøklæv',"good morning":'Ræva Mëla',"good night":'Nøkt Mëla',"come back":'Kelm Kava',mamad:'Møža'
};

const enAliases={colour:'color',favourite:'favorite',centre:'center',organise:'organize',organised:'organized'};
Object.entries(enAliases).forEach(([from,to])=>{if(enToZv[to])enToZv[from]=enToZv[to]});

const zvToEn={};
Object.entries(enToZv).forEach(([en,zv])=>{if(!zvToEn[zv])zvToEn[zv]=en});
const faToEn={"سلام":"hello","درود":"greetings","خداحافظ":"goodbye","من":"I","تو":"you","او":"he/she","ما":"we","شما":"you","آنها":"they","دوست":"friend","دوستان":"friends","خانه":"home","شهر":"city","آب":"water","آتش":"fire","زمین":"earth","آسمان":"sky","شب":"night","روز":"day","خوب":"good","بد":"bad","بزرگ":"big","کوچک":"small","سریع":"fast","کند":"slow","عجیب":"strange","قوی":"strong","ضعیف":"weak","بازی":"game","بریم":"let's go","ممد":"Mamad","دوستت دارم":"I love you","سلام دوست من":"hello my friend"};
Object.keys(faDict).forEach(fa=>{if(!(fa in faToEn))faToEn[fa]=fa});

const normalizeFa=s=>s.normalize('NFC').replace(/[يى]/g,'ی').replace(/ك/g,'ک').replace(/ۀ/g,'ه').replace(/ـ/g,'').replace(/\u200c/g,'');
const normalizeEn=s=>s.normalize('NFC').replace(/[’‘]/g,"'").trim();
const escapeRe=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const tidy=s=>s.replace(/\s+/g,' ').replace(/\s+([،؛,:.!؟?])/g,'$1').trim();

function applyPhrases(text,entries){
  let out=text;
  const sorted=entries.filter(([k])=>k).sort((a,b)=>b[0].length-a[0].length);
  for(const [key,val] of sorted){
    const re=new RegExp('(?<![\\p{L}\\p{M}A-Za-z])'+escapeRe(key)+'(?![\\p{L}\\p{M}A-Za-z])','giu');
    out=out.replace(re,()=>`\uE000${encodeURIComponent(val)}\uE001`);
  }
  return out;
}
function restoreMarkers(text){return text.replace(/\uE000(.*?)\uE001/g,(_,x)=>decodeURIComponent(x));}
function transliterateFaWord(word){
  let out='';
  for(const ch of word)out+=unit[ch]??ch;
  return out;
}
function replaceMarkedOrTokenized(text,map,unknownHandler){
  const protectedText=applyPhrases(text,Object.entries(map));
  const parts=protectedText.split(/(\uE000.*?\uE001|[^\s]+)/gu);
  return parts.map(part=>{
    if(part.startsWith('\uE000')&&part.endsWith('\uE001'))return part;
    if(/^\s+$/.test(part)||part==='')return part;
    const m=part.match(/^([\(\[\{"'«]*)(.*?)([\)\]\}…"'»،؛,:.!؟?]*)$/u);
    if(!m)return part;
    const [,pre,core,post]=m;
    const key=core.normalize('NFC');
    const lower=key.toLocaleLowerCase('en-US');
    const val=map[key]??map[lower];
    return pre+(val??unknownHandler(key))+post;
  }).join('');
}

function translateFA3(text){
  const normalized=normalizeFa(text);
  const entries=Object.entries(faDict).map(([k,v])=>[normalizeFa(k),v]).filter(([,v])=>v!=='');
  let protectedText=applyPhrases(normalized,entries);
  const chunks=protectedText.split(/(\uE000.*?\uE001|\s+)/gu);
  const out=chunks.map(chunk=>{
    if(!chunk)return '';
    if(chunk.startsWith('\uE000')&&chunk.endsWith('\uE001'))return chunk;
    if(/^\s+$/.test(chunk))return chunk;
    const m=chunk.match(/^([«"'“”‘’\(\[\{]*)(.*?)([،؛,:.!؟?…»"'“”‘’\)\]\}]*)$/u);
    if(!m)return transliterateFaWord(chunk);
    const [,pre,core,post]=m;
    if(!core)return chunk;
    const key=normalizeFa(core);
    const known=faDict[key];
    return pre+(known?known:transliterateFaWord(core))+post;
  }).join('');
  return tidy(restoreMarkers(out));
}

function translateEN3(text){
  const normalized=normalizeEn(text);
  const entries=Object.entries(enToZv).sort((a,b)=>b[0].length-a[0].length);
  let out=normalized;
  for(const [key,val] of entries){
    const re=new RegExp('(?<![A-Za-z])'+escapeRe(key)+'(?![A-Za-z])','gi');
    out=out.replace(re,()=>`\uE000${encodeURIComponent(val)}\uE001`);
  }
  const chunks=out.split(/(\uE000.*?\uE001|\s+)/g);
  return tidy(restoreMarkers(chunks.map(chunk=>{
    if(!chunk||/^\s+$/.test(chunk)||chunk.startsWith('\uE000'))return chunk;
    const m=chunk.match(/^([^A-Za-z]*)([A-Za-z][A-Za-z'-]*)([^A-Za-z]*)$/);
    if(!m)return chunk;
    const [,pre,word,post]=m;
    const val=enToZv[word.toLowerCase()];
    return pre+(val??word)+post;
  }).join('')));
}

function translateZV3(text){
  const normalized=text.normalize('NFC').replace(/\u200c/g,'');
  let out=normalized;
  const entries=Object.entries(faDict).filter(([,v])=>v).sort((a,b)=>b[1].length-a[1].length);
  for(const [fa,zv] of entries){
    const re=new RegExp('(?<![\\p{L}\\p{M}])'+escapeRe(zv)+'(?![\\p{L}\\p{M}])','gu');
    out=out.replace(re,()=>`\uE000${encodeURIComponent(fa)}\uE001`);
  }
  const legacy=typeof legacyZvToFa!=='undefined'?Object.entries(legacyZvToFa):[];
  for(const [zv,fa] of legacy.sort((a,b)=>b[0].length-a[0].length)){
    const re=new RegExp('(?<![\\p{L}\\p{M}])'+escapeRe(zv)+'(?![\\p{L}\\p{M}])','gu');
    out=out.replace(re,()=>`\uE000${encodeURIComponent(fa)}\uE001`);
  }
  out=out.split(/(\uE000.*?\uE001|\s+)/gu).map(chunk=>{
    if(!chunk||/^\s+$/.test(chunk)||chunk.startsWith('\uE000'))return chunk;
    if(/^[\(\[\{"'«]*[\)\]\}…"'»،؛,:.!؟?]*$/u.test(chunk))return chunk;
    let core=chunk,pre='',post='';
    const m=chunk.match(/^([\(\[\{"'«]*)(.*?)([\)\]\}…"'»،؛,:.!؟?]*)$/u);
    if(m){pre=m[1];core=m[2];post=m[3]}
    let decoded='';
    for(let i=0;i<core.length;){const pair=core.slice(i,i+2);if(unitReverse[pair]){decoded+=unitReverse[pair];i+=2}else{decoded+=core[i];i++}}
    return pre+decoded+post;
  }).join('');
  return tidy(restoreMarkers(out));
}

function translateZVtoEN3(text){
  const fa=translateZV3(text);
  if(!fa)return '';
  return tidy(fa.split(/(\s+)/g).map(x=>x).join(''));
}
function translateFAtoEN3(text){
  const normalized=normalizeFa(text);
  let out=normalized;
  const entries=Object.entries(faToEn).sort((a,b)=>b[0].length-a[0].length);
  for(const [fa,en] of entries){
    const re=new RegExp('(?<![\\p{L}\\p{M}A-Za-z])'+escapeRe(normalizeFa(fa))+'(?![\\p{L}\\p{M}A-Za-z])','gu');
    out=out.replace(re,()=>`\uE000${encodeURIComponent(en)}\uE001`);
  }
  const chunks=out.split(/(\uE000.*?\uE001|\s+)/gu);
  return tidy(restoreMarkers(chunks.map(chunk=>{
    if(!chunk||/^\s+$/.test(chunk)||chunk.startsWith('\uE000'))return chunk;
    const m=chunk.match(/^([^\p{L}]*)(.*?)([^\p{L}]*)$/u);
    return m?m[1]+m[2]+m[3]:chunk;
  }).join('')));
}

function translateAny3(text,from,to){
  if(from==='fa'&&to==='zv')return translateFA3(text);
  if(from==='zv'&&to==='fa')return translateZV3(text);
  if(from==='en'&&to==='zv')return translateEN3(text);
  if(from==='zv'&&to==='en')return translateZVtoEN3(text);
  if(from==='fa'&&to==='en')return translateFAtoEN3(text);
  if(from==='en'&&to==='fa'){
    const temp=translateEN3(text);
    const reverse={};Object.entries(enToZv).forEach(([en,zv])=>{reverse[zv]=en});
    return translateZV3(temp).replace(/^/,'').replace(/\b/g,'');
  }
  return text;
}

const labels={fa:'فارسی',en:'English',zv:'ژاڤرک'};
const placeholders={fa:'مثلاً: ممد بریم بازی؟',en:'e.g. I love you.',zv:'مثلاً: Në Vü Drøklæv'};
let from='fa',to='zv';
const mode=document.querySelector('.mode');
const input=document.getElementById('input');
const output=document.getElementById('output');
const status=document.getElementById('status');
const translateBtn=document.getElementById('translate');
const swapBtns=[document.getElementById('swap'),document.getElementById('swap2')].filter(Boolean);

if(mode){
  mode.innerHTML='<select class="mode-badge" id="fromSelect" aria-label="زبان مبدأ"><option value="fa">فارسی</option><option value="en">English</option><option value="zv">ژاڤرک</option></select><span>→</span><select class="mode-badge" id="toSelect" aria-label="زبان مقصد"><option value="zv">ژاڤرک</option><option value="en">English</option><option value="fa">فارسی</option></select>';
}
const fromSelect=document.getElementById('fromSelect');
const toSelect=document.getElementById('toSelect');

function render(){
  from=fromSelect.value;to=toSelect.value;
  document.getElementById('inputTag').textContent='INPUT · '+from.toUpperCase();
  document.getElementById('outputTag').textContent='OUTPUT · '+to.toUpperCase();
  input.placeholder=placeholders[from];
  input.dir=from==='fa'?'rtl':'ltr';
  output.dir=to==='fa'?'rtl':'ltr';
  output.style.textAlign=to==='fa'?'right':'left';
  const version=document.querySelector('.version');if(version)version.textContent='Žavërk • v8.4';
}
function update(){
  const s=input.value;
  output.value=s?translateAny3(s,from,to):'';
  document.getElementById('inputCount').textContent=`${s.length.toLocaleString('fa-IR')} نویسه`;
  document.getElementById('outputCount').textContent=`${output.value.length.toLocaleString('fa-IR')} نویسه`;
  status.textContent=s?`ترجمه آماده است؛ ${output.value.length.toLocaleString('fa-IR')} نویسه خروجی ساخته شد.`:'آماده‌ام؛ متن را بنویس.';
}

fromSelect.value='fa';toSelect.value='zv';
fromSelect.addEventListener('change',()=>{render();update()});
toSelect.addEventListener('change',()=>{render();update()});
input.addEventListener('input',update);
translateBtn.addEventListener('click',update);
swapBtns.forEach(btn=>btn.addEventListener('click',()=>{const x=fromSelect.value;fromSelect.value=toSelect.value;toSelect.value=x;render();update()}));

const clearBtn=document.getElementById('clear');
if(clearBtn)clearBtn.addEventListener('click',()=>{input.value='';update()});

document.querySelectorAll('.example-btn').forEach(btn=>btn.addEventListener('click',()=>{
  fromSelect.value='fa';toSelect.value='zv';render();input.value=btn.dataset.fa||'';update();
}));

render();update();
})();
