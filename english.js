(function(){
'use strict';

const boot=()=>{
  const script=document.createElement('script');
  script.src='english-core.js';
  script.onload=function(){
    const enUnit={a:'ä',b:'ƀ',c:'ç',d:'ð',e:'ë',f:'ƒ',g:'ğ',h:'ħ',i:'ï',j:'ĵ',k:'ƙ',l:'ł',m:'ṃ',n:'ŋ',o:'ö',p:'þ',q:'ɋ',r:'ř',s:'š',t:'ŧ',u:'ü',v:'ṽ',w:'ŵ',x:'χ',y:'ÿ',z:'ž'};
    const input=document.getElementById('input');
    const output=document.getElementById('output');
    const fromSelect=document.getElementById('fromSelect');
    const toSelect=document.getElementById('toSelect');
    const translateBtn=document.getElementById('translate');
    if(!input||!output||!fromSelect||!toSelect)return;

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
        const word=raw.toLowerCase();
        const re=new RegExp('(?<![A-Za-z])'+escapeRe(raw)+'(?![A-Za-z])','g');
        if(re.test(result))result=result.replace(new RegExp('(?<![A-Za-z])'+escapeRe(raw)+'(?![A-Za-z])','g'),transliterateEnWord(raw));
        else if(word!==raw){
          const ci=new RegExp('(?<![A-Za-z])'+escapeRe(word)+'(?![A-Za-z])','gi');
          if(ci.test(result))result=result.replace(new RegExp('(?<![A-Za-z])'+escapeRe(word)+'(?![A-Za-z])','gi'),transliterateEnWord(raw));
        }
      }
      output.value=result;
    }

    const refresh=()=>setTimeout(applyEnglishFallback,0);
    input.addEventListener('input',refresh);
    fromSelect.addEventListener('change',refresh);
    toSelect.addEventListener('change',refresh);
    if(translateBtn)translateBtn.addEventListener('click',refresh);
    const swap=document.getElementById('swap');
    const swap2=document.getElementById('swap2');
    if(swap)swap.addEventListener('click',refresh);
    if(swap2)swap2.addEventListener('click',refresh);
    refresh();
  };
  script.onerror=function(){console.error('Žavërk: failed to load english-core.js');};
  document.head.appendChild(script);
};

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',boot,{once:true});
}else{
  boot();
}
})();