function unlock(){
  const code=document.getElementById('code'), err=document.getElementById('error');
  if(code.value==='0411'){
    document.getElementById('lock').classList.add('hidden');
    document.getElementById('main').classList.remove('hidden');
    window.scrollTo({top:0});
  }else{
    err.textContent="Hmm… that's not it. Try again. 🫣";
    code.value='';
  }
}
document.getElementById('code').addEventListener('keydown',e=>{if(e.key==='Enter')unlock()});

const target=new Date('2026-11-04T00:00:00');
function tick(){
  const diff=target-new Date();
  if(diff<=0){
    ['d','h','m','s'].forEach(x=>document.getElementById(x).textContent='00');
    return;
  }
  const days=Math.floor(diff/86400000);
  const hours=Math.floor(diff%86400000/3600000);
  const mins=Math.floor(diff%3600000/60000);
  const secs=Math.floor(diff%60000/1000);
  d.textContent=String(days).padStart(2,'0');
  h.textContent=String(hours).padStart(2,'0');
  m.textContent=String(mins).padStart(2,'0');
  s.textContent=String(secs).padStart(2,'0');
}
tick();setInterval(tick,1000);

function reveal(){
  document.getElementById('lastBtn').style.display='none';
  document.getElementById('secret').classList.remove('hidden');
  for(let i=0;i<28;i++){
    const x=document.createElement('div');
    x.className='heart';x.textContent='♥';
    x.style.left=Math.random()*100+'vw';
    x.style.fontSize=(12+Math.random()*18)+'px';
    x.style.animationDuration=(3+Math.random()*3)+'s';
    x.style.color=['#ff6b9d','#ffd1e1','#c084fc','#fff'][Math.floor(Math.random()*4)];
    document.body.appendChild(x);
    setTimeout(()=>x.remove(),6500);
  }
}
