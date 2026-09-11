(function(){
const extraFa={
  "سلام دوست من":"Šævra Drøk Në","صبح بخیر":"Ræva Mëla","شب بخیر":"Nøkt Mëla","خوش آمدی":"Kelmï Mëla","خوش آمدید":"Kelmët Mëla","لطفاً":"Vëla","ممنون":"Thëra","متشکرم":"Thërava","خواهش می‌کنم":"Næra","ببخشید":"Sërna","لطفا":"Vëla","ممنونم":"Thëra",
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
  "بله":"Bëla","آره":"Ära","هرگز":"Nëvar","همیشه":"Alvë","گاهی":"Sëma","زیاد":"Mara","کم":"Nëli","بیشتر":"Möra","کمتر":"Nëra","خیلی":"Vära","فقط":"Sola","هم":"Oma","اما":"Ama","و":"Va","یا":"Vaor","اگر":"Ira","چون":"Köra","که":"Ke","برای":"Föra","با":"Mä","بدون":"Nëmba","از":"Da","به":"To","در":"In","روی":"Ona","زیر":"Nöra","قبل":"Prë","بعد":"Eft","منم":"Nëma","تو هم":"Vüma"
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
  mamad:'Møža',"let’s":'Vrëm',"let's":'Vrëm'
};

const enAliases={colour:'color',favourite:'favorite',centre:'center',organise:'organize',organised:'organized'};
Object.entries(enAliases).forEach(([from,to])=>{if(enToZv[to])enToZv[from]=enToZv[to]});

const zvToEn={};Object.entries(enToZv).forEach(([en,zv])=>{if(!zvToEn[zv])zvToEn[zv]=en});

const faToEn={};
Object.entries(faDict).forEach(([fa,zv])=>{
  const enMap={
    "Šævra":"hello","Ðøren":"greetings","Krävul":"goodbye","Në":"I","Vü":"you","Ën":"he/she","Nëm":"we","Vën":"you","Ënra":"they",
    "Drøk":"friend","Drøken":"friends","Käv":"home","Şevar":"city","Ulv":"water","Røk":"fire","Zæn":"earth","Aşra":"sky","Nøkt":"night","Ræva":"day",
    "Mëla":"good","Durg":"bad","Grön":"big","Neli":"small","Sæva":"fast","Toma":"slow","Qæzar":"strange","Bruk":"strong","Løven":"weak",
    "Varn":"go","Varnë":"went","Varnø":"went","Varnï":"went","Varnëm":"went","Varnët":"went","Varnën":"went","Varna":"I am going","Varni":"you are going","Varnor":"he/she is going","Varnem":"we are going","Varnen":"they are going","Varnul":"I will go",
    "Kelm":"come","Kelmë":"came","Kelmø":"came","Kelmi":"came","Kelmëm":"came","Kelmët":"came","Kelmën":"came","Kelmæ":"I am coming","Kelmiä":"you are coming","Kelmor":"he/she is coming",
    "Dævr":"see","Dævra":"I see","Xøra":"eat","Xøræ":"I eat","Nuvş":"drink","Nuvşæ":"I drink","Sæk":"build","Dæra":"I have","Dær":"have","Drøklæv":"love","Ƶær":"say","Bë":"be","Bën":"are","Næ":"no","Ära":"yes","Bëla":"yes","VæƵ":"game","Vrëm":"let's go","Møža":"Mamad"
  };
  faToEn[fa]=enMap[zv]||fa;
});

/* Direct English -> Persian map. Unknown English words are preserved. */
const enToFa={};Object.entries(faToEn).forEach(([fa,en])=>{if(!enToFa[en])enToFa[en]=fa});

const norm=s=>s.normalize('NFC').replace(/[’‘]/g,"'");
const wordRegex=/[A-Za-z]+(?:['’][A-Za-z]+)*/g;

/* Non-destructive fallback: known words translate; unknown English words,
   names, IDs and technical terms stay intact instead of being lost. */
function wordTranslate(text,map){
  const source=norm(text);
  return source.replace(wordRegex,word=>{
    const key=word.toLowerCase();
    const mapped=map[key];
    return mapped!=null?mapped:word;
  }).replace(/\s+/g,' ').replace(/\s+([,!.?;:])/g,'$1').trim();
}

function translateENtoZV(s){return wordTranslate(s,enToZv)}
function translateZVtoEN(s){return wordTranslate(s,zvToEn)}
function translateENtoFA(s){return wordTranslate(s,enToFa)}
function translateFAtoEN(s){return wordTranslate(s,faToEn)}

let languageFrom='fa',languageTo='zv';
function translateAny(s){
  if(languageFrom==='fa'&&languageTo==='zv')return translateFA(s);
  if(languageFrom==='zv'&&languageTo==='fa')return translateZV(s);
  if(languageFrom==='en'&&languageTo==='zv')return translateENtoZV(s);
  if(languageFrom==='zv'&&languageTo==='en')return translateZVtoEN(s);
  if(languageFrom==='en'&&languageTo==='fa')return translateENtoFA(s);
  if(languageFrom==='fa'&&languageTo==='en')return translateFAtoEN(s);
  return s;
}

function labels(){return {fa:'فارسی',en:'English',zv:'ژاڤرک'}}
function renderMode(){const a=labels();document.getElementById('fromLang').textContent=a[languageFrom];document.getElementById('toLang').textContent=a[languageTo];document.getElementById('inputTag').textContent='INPUT · '+languageFrom.toUpperCase();document.getElementById('outputTag').textContent='OUTPUT · '+languageTo.toUpperCase();const p={fa:'مثلاً: ممد بریم بازی؟',en:'e.g. I love you.',zv:'مثلاً: Në Vü Drøklæv'};document.getElementById('input').placeholder=p[languageFrom];document.getElementById('input').dir=languageFrom==='fa'?'rtl':'ltr';document.getElementById('output').dir=languageTo==='fa'?'rtl':'ltr';document.getElementById('output').style.textAlign=languageTo==='fa'?'right':'left'}
function update3(){const input=document.getElementById('input'),output=document.getElementById('output'),status=document.getElementById('status'),s=input.value;output.value=s?translateAny(s):'';document.getElementById('inputCount').textContent=`${s.length.toLocaleString('fa-IR')} نویسه`;document.getElementById('outputCount').textContent=`${output.value.length.toLocaleString('fa-IR')} نویسه`;status.textContent=s?`ترجمه آماده است؛ ${output.value.length.toLocaleString('fa-IR')} نویسه خروجی ساخته شد.`:'آماده‌ام؛ متن را بنویس.'}
function setLanguages(from,to){languageFrom=from;languageTo=to;renderMode();document.getElementById('output').value='';update3()}
const toolbar=document.querySelector('.mode');toolbar.innerHTML='<select class="mode-badge" id="fromSelect" aria-label="زبان مبدأ"><option value="fa">فارسی</option><option value="en">English</option><option value="zv">ژاڤرک</option></select><span>→</span><select class="mode-badge" id="toSelect" aria-label="زبان مقصد"><option value="zv">ژاڤرک</option><option value="en">English</option><option value="fa">فارسی</option></select>';
const fs=document.getElementById('fromSelect'),ts=document.getElementById('toSelect');fs.value='fa';ts.value='zv';fs.onchange=()=>setLanguages(fs.value,ts.value);ts.onchange=()=>setLanguages(fs.value,ts.value);
document.getElementById('input').addEventListener('input',update3);document.getElementById('translate').onclick=update3;document.getElementById('swap').onclick=()=>{const x=fs.value;fs.value=ts.value;ts.value=x;setLanguages(fs.value,ts.value)};document.getElementById('swap2').onclick=()=>{const x=fs.value;fs.value=ts.value;ts.value=x;setLanguages(fs.value,ts.value)};
document.querySelectorAll('.example-btn').forEach(b=>b.onclick=()=>{fs.value='fa';ts.value='zv';setLanguages('fa','zv');document.getElementById('input').value=b.dataset.fa;update3()});
renderMode();update3();
})();
