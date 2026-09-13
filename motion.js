(()=>{
  const link=document.createElement('link');link.rel='stylesheet';link.href='motion.css';document.head.appendChild(link);
  const layer=document.createElement('div');layer.className='zey-beans';
  for(let i=0;i<10;i++){const b=document.createElement('span');b.className='zey-bean';layer.appendChild(b)}document.body.appendChild(layer);
  const cursor=document.createElement('div');cursor.className='zey-cursor';document.body.appendChild(cursor);
  const nav=document.querySelector('.nav');
  const reveal=()=>{document.querySelectorAll('main section:not(.hero),footer,.feature,.home-menu,.social').forEach((el,i)=>{if(!el.hasAttribute('data-reveal'))el.setAttribute('data-reveal','');});document.querySelectorAll('[data-reveal]').forEach(el=>{const r=el.getBoundingClientRect();if(r.top<window.innerHeight*.88)el.classList.add('revealed')})};
  const scroll=()=>{if(nav)nav.classList.toggle('scrolled',scrollY>30);reveal()};
  addEventListener('scroll',scroll,{passive:true});scroll();
  addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';document.querySelectorAll('.hero-copy,.hero-image').forEach((el,i)=>{const x=(e.clientX/innerWidth-.5)*(i?8:2);const y=(e.clientY/innerHeight-.5)*(i?8:2);el.style.transform=`translate3d(${x}px,${y}px,0)`})},{passive:true});
  const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('revealed')}),{threshold:.12});setTimeout(()=>document.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el)),50);
})();
