(function(){
  const root=document.documentElement;
  const stored=localStorage.getItem('theme');
  const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial=stored||(prefersDark?'dark':'light');
  applyTheme(initial);
  const btn=document.querySelector('.theme-toggle');
  if(btn){btn.addEventListener('click',()=>{const next=root.getAttribute('data-theme')==='dark'?'light':'dark';applyTheme(next);localStorage.setItem('theme',next);});}
  function applyTheme(mode){
    root.setAttribute('data-theme',mode);
    const lights=document.querySelectorAll('link[rel="icon"][data-theme="light"]');
    const darks=document.querySelectorAll('link[rel="icon"][data-theme="dark"]');
    lights.forEach(l=>l.media=mode==='dark'?'not all':'(prefers-color-scheme: light)');
    darks.forEach(l=>l.media=mode==='dark'?'(prefers-color-scheme: dark)':'not all');
  }
})();

document.addEventListener('submit',e=>{
  const f=e.target.closest('.contact-form');
  if(!f)return;const n=f.querySelector('#name'),em=f.querySelector('#email'),m=f.querySelector('#message');
  const ok=n.value.trim()&&/\S+@\S+\.\S+/.test(em.value)&&m.value.trim();
  if(!ok){e.preventDefault();[n,em,m].forEach(el=>{el.style.borderColor=el.value.trim()?'#d7d1c6':'#cc3b3b'});alert('Please complete all fields with a valid email.');}
});
