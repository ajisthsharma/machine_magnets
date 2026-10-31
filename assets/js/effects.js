/* Effects: magnet logo, section-aware dynamic background, particle field, magnetic hover */
var MAG='<svg viewBox="0 -10 48 58" aria-hidden="true"><path class="fl" d="M12 2C10-14 38-14 36 2"/><path class="fl b" d="M12 2C14-6 34-6 36 2"/><g class="hs"><path d="M12 8v18a12 12 0 0 0 24 0V8" fill="none" stroke="#8c8189" stroke-width="9"/><path d="M12 8v9" stroke="#c1272d" stroke-width="9"/><path d="M36 8v9" stroke="#d8b36a" stroke-width="9"/><text x="12" y="6" font-size="6" fill="#fff" text-anchor="middle" font-family="sans-serif" font-weight="700">N</text><text x="36" y="6" font-size="6" fill="#fff" text-anchor="middle" font-family="sans-serif" font-weight="700">S</text></g></svg>';
document.querySelectorAll(".logo").forEach(function(l){l.innerHTML=MAG});
/* background theme follows the section crossing the viewport centre */
var TH=[["#c1272d","#6e0f1f","#d8b36a"],["#6e0f1f","#4a1a6e","#c1272d"],["#d8b36a","#8a2a1a","#3a1450"],["#4a1a6e","#c1272d","#d8b36a"]],BG=document.querySelector(".bg");
function theme(i){var t=TH[i%4];BG.style.setProperty("--c1",t[0]);BG.style.setProperty("--c2",t[1]);BG.style.setProperty("--c3",t[2])}
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)theme(+e.target.dataset.th)})},{rootMargin:"-48% 0px -48% 0px"});
document.querySelectorAll(".pg").forEach(function(p){p.querySelectorAll(".hero,.sec,.stair,.wsec").forEach(function(s,i){s.dataset.th=i;so.observe(s)})});
addEventListener("scroll",function(){BG.style.setProperty("--sy",scrollY)},{passive:true});
/* 3D bar magnet in the hero (moving, spinning, field lines flowing from N to S) */
(function(){var m=document.getElementById("mag");if(!m)return;
 var f='<div class="sp"><div class="sp2"><div class="bar">'+
 ['f','b','t','bo'].map(function(c){return'<div class="mf '+c+'"><i>N</i><u></u><i>S</i></div>'}).join("")+'<div class="mc1 cn"></div><div class="mc1 cs"></div></div>'+
 [0,60,120].map(function(d){return'<svg class="fp" style="transform:rotateX('+d+'deg)" viewBox="-240 -190 480 380"><path class="fq" d="M-112 0C-112-120 112-120 112 0"/><path class="fq" d="M-112 0C-112 120 112 120 112 0"/><path class="fq o" d="M-112 0C-112-230 112-230 112 0"/><path class="fq o" d="M-112 0C-112 230 112 230 112 0"/></svg>'}).join("")+'</div></div>';
 m.innerHTML=f})();
/* particles: dots drift, then are pulled in and orbit the magnet cursor */
var PTR={x:-999,y:-999};
(function(){var cv=document.getElementById("fx"),cx=cv.getContext("2d"),W,H,P=[],N=RM?60:120;
function sz(){W=cv.width=innerWidth;H=cv.height=innerHeight}sz();addEventListener("resize",sz);
for(var i=0;i<N;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,s:Math.random()*1.5+.4});
addEventListener("pointermove",function(e){PTR.x=e.clientX;PTR.y=e.clientY},{passive:true});
document.addEventListener("pointerleave",function(){PTR.x=PTR.y=-999});
function draw(){cx.clearRect(0,0,W,H);P.forEach(function(p){var dx=PTR.x-p.x,dy=PTR.y-p.y,d=Math.hypot(dx,dy)||1,near=0;
 if(d<260&&!RM){var f=(1-d/260);p.vx+=dx/d*.09*f;p.vy+=dy/d*.09*f;if(d<90){p.vx+=-dy/d*.06;p.vy+=dx/d*.06}near=f;
  cx.strokeStyle="rgba(216,179,106,"+f*.45+")";cx.lineWidth=.7;cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(PTR.x,PTR.y);cx.stroke()}
 p.vx=Math.max(-3,Math.min(3,p.vx*(near?.96:.992)));p.vy=Math.max(-3,Math.min(3,p.vy*(near?.96:.992)));
 p.x=(p.x+p.vx+W)%W;p.y=(p.y+p.vy+H)%H;
 cx.fillStyle=near?"rgba(255,226,160,"+(.55+near*.4)+")":"rgba(241,235,230,.5)";cx.beginPath();cx.arc(p.x,p.y,p.s+near*1.4,0,6.3);cx.fill()});if(!RM)requestAnimationFrame(draw)}draw()})();
/* small 3D magnet cursor (fine pointers only) */
(function(){if(RM||!matchMedia("(hover:hover) and (pointer:fine)").matches)return;
 var L='<path d="M8 4v12a8 8 0 0 0 16 0V4" fill="none" stroke="#6d6269" stroke-width="6"/>',T='<path d="M8 4v6" stroke="#e03a40" stroke-width="6"/><path d="M24 4v6" stroke="#d8b36a" stroke-width="6"/><path d="M6 6v10a10 10 0 0 0 4 8" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1.2" stroke-linecap="round"/>';
 var c=document.createElement("div");c.className="cur";c.setAttribute("aria-hidden","true");
 c.innerHTML='<div class="cm"><svg class="cl l1" viewBox="0 0 32 32">'+L+'</svg><svg class="cl l2" viewBox="0 0 32 32">'+L+'</svg><svg class="cl l3" viewBox="0 0 32 32">'+L.replace("#6d6269","#9a8f96")+T+'</svg></div>';
 document.body.appendChild(c);document.documentElement.classList.add("has-cur");
 var cm=c.firstChild,tx=-100,ty=-100,x=tx,y=ty,ang=0,sc=1,hov=0,dn=0;
 addEventListener("pointermove",function(e){tx=e.clientX;ty=e.clientY;c.style.opacity=1;hov=e.target.closest&&e.target.closest("a,button,.tile,.st,.dc,input,label,[role=button]")?1:0},{passive:true});
 addEventListener("pointerdown",function(){dn=1});addEventListener("pointerup",function(){dn=0});document.addEventListener("pointerleave",function(){c.style.opacity=0});
 (function loop(){var dx=tx-x,dy=ty-y;x+=dx*.3;y+=dy*.3;var sp=Math.hypot(dx,dy);
  if(sp>1.2){var a=Math.atan2(dy,dx)*57.3+90,da=((a-ang+540)%360)-180;ang+=da*.14}
  sc+=((hov?1.4:1)*(dn?.82:1)-sc)*.2;
  c.style.transform="translate("+x.toFixed(1)+"px,"+y.toFixed(1)+"px) scale("+sc.toFixed(3)+")";
  cm.style.transform="rotateZ("+ang.toFixed(1)+"deg) rotateX("+Math.max(-45,Math.min(45,-dy*1.4)).toFixed(1)+"deg) rotateY("+Math.max(-45,Math.min(45,dx*1.4)).toFixed(1)+"deg)";
  requestAnimationFrame(loop)})()})();
/* magnetic pull on buttons */
var mg=null;document.addEventListener("pointermove",function(e){var t=e.target.closest&&e.target.closest(".btn,.soc a,.fl button");
 if(mg&&mg!==t){mg.style.transform="";mg=null}if(!t||RM)return;mg=t;var r=t.getBoundingClientRect();
 t.style.transform="translate("+(e.clientX-r.left-r.width/2)*.22+"px,"+(e.clientY-r.top-r.height/2)*.3+"px)"},{passive:true});
