(function(){
'use strict';

/*
 * english-core.js owns the translator UI and must finish initializing
 * before this compatibility layer binds its English fallback behavior.
 * The previous dynamic loader raced the page lifecycle on GitHub Pages.
 */
document.write('<script src="english-core.js"><\\/script>');

const enUnit={a:'ä',b:'ƀ',c:'ç',d:'ð',e:'ë',f:'ƒ',g:'ğ',h:'ħ',i:'ï',j:'ĵ',k:'ƙ',l:'ł',m:'ṃ',n:'ŋ',o:'ö',p:'þ',q:'ɋ',r:'ř',s:'š',t:'ŧ',u:'ü',v:'ṽ',w:'ŵ',x:'χ',y:'ÿ',z:'ž'};
const input=document.getElementById('input');
const output=document.getElementById('output');
const fromSelect=document.getElementById('fromSelect');
const toSelect=document.getElementById('toSelect');
const translateBtn=document.getElementById('translate');

if(!input||!output||!fromSelect||!toSelect){
  console.error('Žavërk: translator controls were not initialized');
  return;
}

const transliterateEnWord=word=>Array.from(word).map(ch=>enUnit[ch.toLowerCase()]??ch).join('');
const escapeRe=s=>s.replace(/[.*+?^${}()|[\\]\\]/g,'\\$&');

function applyEnglishFallback(){
  if(fromSelect.value!=='en'||toSelect.value!=='zv')return;
  const source=input.value||'';
  const current=output.value||'';
  if(!source||!current)return;

  const words=source.match(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g)||[];
  let result=current;

  for(const raw of words){
    const escaped=escapeRe(raw);
    const exact=new RegExp('(?<![A-Za-z])'+escaped+'(?![A-Za-z])','g');
    if(exact.test(result)){
      result=result.replace(new RegExp('(?<![A-Za-z])'+escaped+'(?![A-Za-z])','g'),transliterateEnWord(raw));
      continue;
    }

    const lower=raw.toLowerCase();
    if(lower!==raw){
      const ci=new RegExp('(?<![A-Za-z])'+escapeRe(lower)+'(?![A-Za-z])','gi');
      if(ci.test(result))result=result.replace(new RegExp('(?<![A-Za-z])'+escapeRe(lower)+'(?![A-Za-z])','gi'),transliterateEnWord(raw));
    }
  }

  output.value=result;
  const outputCount=document.getElementById('outputCount');
  if(outputCount)outputCount.textContent=`${result.length.toLocaleString('fa-IR')} نویسه`;
}

const refresh=()=>queueMicrotask(applyEnglishFallback);
input.addEventListener('input',refresh);
fromSelect.addEventListener('change',refresh);
toSelect.addEventListener('change',refresh);
if(translateBtn)translateBtn.addEventListener('click',refresh);

const swap=document.getElementById('swap');
const swap2=document.getElementById('swap2');
if(swap)swap.addEventListener('click',refresh);
if(swap2)swap2.addEventListener('click',refresh);

refresh();
})();