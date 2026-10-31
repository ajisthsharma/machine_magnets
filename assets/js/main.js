/* ===== CONTENT: replace placeholders. Real facts: tagline, 150+/4/18 stats, founded Sept 2024, WhatsApp + Instagram links. ===== */
var NAV=[["home","Home"],["about","About"],["hall-of-fame","Hall of Fame"],["events","Events"],["projects","Project Showcase"],["journal","Journal"]];
var SOCIAL=[["in","LinkedIn","https://www.linkedin.com/"],["ig","Instagram","https://www.instagram.com/machinemagnets"],["yt","YouTube","https://www.youtube.com/"],["gh","GitHub","https://github.com/"]]; /* LinkedIn, YouTube, GitHub are generic placeholders: put the club profile URLs */
var STATS=[["150+","Active members"],["4","Events organised"],["18","Core team"]];
var FOCUS=[["Learn","Workshops and sessions that turn curiosity into skill."],["Build","Projects that ship, from idea to working prototype."],["Collaborate","Teams, mentors and peers solving problems together."],["Impact","Work that matters beyond the campus."]];
var EVENTS=[["Date TBA","Placeholder event one","Short description of the event."],["Date TBA","Placeholder event two","Short description of the event."],["Date TBA","Placeholder event three","Short description of the event."]];
function team(n){return [1,2,3].map(function(i){return "Placeholder member "+i})}
var FAC=[1,2,3,4].map(function(i){return{n:"Placeholder name",r:"Faculty Coordinator "+i}});
var CORE=["President","Vice President","Technical Head","Research & Outreach Head","Social Media Head","Management Head"].map(function(r,i){var o={n:"Placeholder name",r:r};if(i>1)o.t=team();return o});
var CHAMPS=[["1st place","Hackathon · Year","Placeholder winning team"],["2nd place","Event · Year","Placeholder runner-up"],["Core team","Achievement · Year","Placeholder core team award"]];
var GAL=[["Hackathon moment","Hackathons","w"],["Winning team","Hackathons","t"],["Workshop session","Events",""],["Core team meet","Core Team","w"],["Prize ceremony","Events","t"],["Demo day","Hackathons",""],["Team photo","Core Team",""],["Club event","Events","w"]];
var TLD=[["2024","Machine Magnet established","Founded in September 2024 at NIET."],["2025","Placeholder: first hackathon","Replace with a real milestone."],["2026","Placeholder: latest result","Replace with a real milestone."]];
var PJ=[1,2,3].map(function(i){return["Project","Placeholder project "+i,"Short description of what was built and by whom."]});
var JN=[1,2,3].map(function(i){return["Article","Placeholder post "+i,"Short summary of the post."]});
/* ===== */
var RM=matchMedia("(prefers-reduced-motion: reduce)").matches;if(RM)document.documentElement.classList.add("rm");
function $(i){return document.getElementById(i)}function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function clamp(x,a,b){return Math.max(a,Math.min(b,x))}
function cards(a,cls){return a.map(function(c,i){return '<article class="glass card rv '+(cls||"")+'" style="--d:'+i*110+'ms"><p class="meta">'+c[0]+'</p><h3>'+esc(c[1]||"")+'</h3><p>'+esc(c[2]||"")+'</p><span class="tag">Placeholder</span></article>'}).join("")}
/* shared chrome */
$("nav").innerHTML=NAV.map(function(n){return '<a href="#'+n[0]+'" data-p="'+n[0]+'">'+n[1]+'</a>'}).join("");
$("fl2").innerHTML=NAV.filter(function(n){return n[0]!=="about"}).map(function(n){return '<li><a href="#'+n[0]+'">'+n[1]+'</a></li>'}).join("");
$("soc").innerHTML=SOCIAL.map(function(s){return '<a href="'+s[2]+'" target="_blank" rel="noopener noreferrer" aria-label="'+s[1]+'">'+s[0]+'</a>'}).join("");
$("chips").innerHTML=STATS.map(function(s){return '<div class="glass chip rv"><b>'+s[0]+'</b><span>'+s[1]+'</span></div>'}).join("");
$("focus").innerHTML=FOCUS.map(function(f,i){return '<article class="glass card fc rv" style="--d:'+i*110+'ms"><span class="n">0'+(i+1)+'</span><h3>'+f[0]+'</h3><p>'+f[1]+'</p></article>'}).join("");
document.querySelectorAll(".evs").forEach(function(box){box.innerHTML=EVENTS.map(function(e,i){return '<article class="glass card ev rv" style="--d:'+i*110+'ms"><span class="dt">'+e[0]+'</span><h3>'+esc(e[1])+'</h3><p>'+esc(e[2])+'</p><button class="btn" data-ev="'+esc(e[1])+'">Register</button></article>'}).join("")});
$("champs").innerHTML=cards(CHAMPS);$("jn").innerHTML=cards(JN);
/* gallery */
var GR=["linear-gradient(135deg,#6e0f1f,#15110f)","linear-gradient(160deg,#d8b36a,#a3182b)","linear-gradient(120deg,#2a0d12,#c1272d)","linear-gradient(150deg,#15110f,#d8b36a)"];
$("gal").innerHTML=GAL.map(function(g,i){return '<figure class="tile '+g[2]+' rv" data-c="'+g[1]+'"><div style="background:'+GR[i%4]+'"></div><figcaption>'+g[0]+' · '+g[1]+'</figcaption></figure>'}).join("");
$("fl").innerHTML=["All","Hackathons","Events","Core Team"].map(function(c){return '<button type="button" data-c="'+c+'" aria-pressed="'+(c==="All")+'">'+c+'</button>'}).join("");
$("fl").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;var c=b.dataset.c;document.querySelectorAll("#fl button").forEach(function(x){x.setAttribute("aria-pressed",x===b)});
 var t=document.querySelectorAll(".tile");t.forEach(function(x){x.classList.add("out")});
 setTimeout(function(){t.forEach(function(x){var s=c==="All"||x.dataset.c===c;x.style.display=s?"":"none";x.classList.add("seen");if(s)requestAnimationFrame(function(){requestAnimationFrame(function(){x.classList.remove("out")})})})},RM?0:260)});
/* headings */
document.querySelectorAll(".rt").forEach(function(h){var t=h.dataset.t;h.setAttribute("aria-label",t);h.innerHTML=t.split(" ").map(function(w,i){return '<span class="word" aria-hidden="true"><span style="--i:'+i+'">'+w+'</span></span> '}).join("")});
/* register dialog */
var dg=$("rg");document.addEventListener("click",function(e){var b=e.target.closest("[data-ev]");if(!b)return;$("rgt").textContent=b.dataset.ev;$("rok").hidden=true;$("rf").reset();dg.showModal()});
$("rc").onclick=function(){dg.close()};$("rf").onsubmit=function(e){e.preventDefault();$("rok").hidden=false};
/* spotlight + hero tilt */
document.addEventListener("pointermove",function(e){var g=e.target.closest&&e.target.closest(".glass");if(g){var r=g.getBoundingClientRect();g.style.setProperty("--mx",e.clientX-r.left+"px");g.style.setProperty("--my",e.clientY-r.top+"px")}
 if(!RM){var s=$("scene");if(s&&s.offsetParent){var o=s.firstChild,r2=s.getBoundingClientRect();o.style.setProperty("--ry",((e.clientX-r2.left)/r2.width-.5)*50+"deg");o.style.setProperty("--rx",-((e.clientY-r2.top)/r2.height-.5)*40+"deg")}}},{passive:true});
/* person card (Techkriti-style: photo, hover socials, role, NAME, phone) */
function card(n,r){return '<div class="ph"><i></i><span class="sc"><a href="'+SOCIAL[1][2]+'" target="_blank" rel="noopener noreferrer" aria-label="Instagram">ig</a><a href="'+SOCIAL[0][2]+'" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a></span></div><div class="inf"><span class="rl">'+esc(r)+'</span><b>'+esc(n)+'</b><em>+91 XXXXX XXXXX</em></div>'}
/* staircase */
var STAIRS=[],MOB=matchMedia("(max-width:800px)");
function stair(id,items,o){var el=$(id),N=items.length;
 el.style.height="calc(100vh + "+(N-1)*55+"vh)";
 el.innerHTML='<div class="stg"><div class="txt"><p class="kick">'+o.k+'</p><h2 class="h2 rt" data-t="'+o.h+'"></h2><p class="sub">'+o.s+'</p><div class="now"></div><div class="pr"><i></i></div></div><div class="vp"><div class="hx">'+
 items.map(function(it,i){return '<div class="st glass" tabindex="0" data-i="'+i+'" style="--i:'+i+'">'+card(it.n,it.r)+'</div>'}).join("")+'</div></div>'+(o.team?'<div class="glass tm" aria-live="polite"></div>':"")+'</div>';
 var h=el.querySelector(".rt");h.setAttribute("aria-label",o.h);h.innerHTML=o.h.split(" ").map(function(w,i){return '<span class="word" aria-hidden="true"><span style="--i:'+i+'">'+w+'</span></span> '}).join("");io.observe(h);
 var hx=el.querySelector(".hx"),sts=el.querySelectorAll(".st"),now=el.querySelector(".now"),pr=el.querySelector(".pr i"),tm=el.querySelector(".tm"),vp=el.querySelector(".vp"),cur=-1;
 function show(st){if(!tm)return;var it=items[+st.dataset.i];if(!it.t){hide();return}
  tm.innerHTML="<h4><small>0"+(+st.dataset.i+1)+"</small>"+esc(it.r.replace(" Head","")+" team")+"<em>"+it.t.length+" members</em></h4>"+'<div class="mg">'+it.t.map(function(m,j){return'<div class="mc" style="--i:'+j+'">'+card(m,it.r.replace(" Head","")+" team")+'</div>'}).join("")+"</div>";tm.classList.add("show")}
 function hide(){if(tm)tm.classList.remove("show")}
 sts.forEach(function(s){s.addEventListener("mouseenter",function(){show(s)});s.addEventListener("focus",function(){show(s)});s.addEventListener("click",function(){show(s)});el.querySelector(".stg").onmouseleave=hide});
 STAIRS.push(function(){if(RM)return;var r=el.getBoundingClientRect(),p=clamp(-r.top/(el.offsetHeight-innerHeight+66),0,1),x=p*(N-1),av=MOB.matches?36:34,dyv=MOB.matches?104:86;if(r.top<innerHeight*.85)h.classList.add("seen");
  hx.style.transform="translateY("+(-x*dyv)+"px) rotateY("+(-x*av)+"deg)";pr.style.width=p*100+"%";
  sts.forEach(function(s,i){var d=Math.abs(i-x);s.style.opacity=clamp(1.2-d*.9,0,1).toFixed(2);s.style.pointerEvents=d<1.1?"auto":"none";s.classList.toggle("on",d<.5)});
  var a=Math.round(x);if(a!==cur){cur=a;now.textContent=items[a].r}})}
/* observers, router, scroll loop */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("seen");io.unobserve(e.target)}})},{threshold:.18,rootMargin:"0px 0px -6% 0px"});
document.querySelectorAll(".rv,.rt").forEach(function(el){io.observe(el)});
stair("fac",FAC,{k:"Guidance",h:"Faculty coordinators",s:"The mentors who guide the club. Scroll to climb the staircase."});
stair("core",CORE,{k:"Leadership",h:"Core team",s:"From the president to every domain head. Hover a lead to see their team.",team:1});
var pages=document.querySelectorAll(".pg"),par=document.querySelectorAll("[data-s]"),bar=$("bar"),raf=0;
function route(){var id=(location.hash||"#home").slice(1);if(!$(id)||!$(id).classList.contains("pg"))id="home";
 pages.forEach(function(p){p.classList.toggle("on",p.id===id)});
 document.querySelectorAll("#nav a").forEach(function(a){a.dataset.p===id?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current")});
 document.title=(NAV.filter(function(n){return n[0]===id})[0]||["","Home"])[1]+" | Machine Magnet";scrollTo(0,0);req()}
function frame(){raf=0;var h=document.documentElement.scrollHeight-innerHeight;bar.style.transform="scaleX("+(h>0?scrollY/h:0)+")";
 if(!RM)par.forEach(function(b){var p=b.closest(".pg");if(!p||!p.classList.contains("on"))return;var r=b.parentElement.getBoundingClientRect();if(r.bottom>-200&&r.top<innerHeight+200)b.style.transform="translate3d(0,"+(r.top*parseFloat(b.dataset.s)).toFixed(1)+"px,0)"});
 if($("about").classList.contains("on"))STAIRS.forEach(function(f){f()})}
function req(){if(!raf)raf=requestAnimationFrame(frame)}
addEventListener("scroll",req,{passive:true});addEventListener("resize",req);addEventListener("hashchange",route);route();
