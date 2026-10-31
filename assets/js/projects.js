/* Project Showcase: gallery + full-screen popup with a looping deck of info cards. Replace PROJECTS with real data. */
var PROJECTS=[1,2,3,4,5,6].map(function(i){return{name:"Placeholder project "+i,tag:"Category",ov:"Short overview of the project: what it is and why it was built.",au:{n:"Author name",li:"https://www.linkedin.com/",gh:"https://github.com/"},
 cards:[["Problem solved","Describe the problem this project addresses."],["Solution","Describe the approach that was taken."],["How it works","Explain the working step by step."],["Tech stack",["Tech A","Tech B","Tech C"]],["Materials used",["Material A","Material B"]],["Results","Outcomes, demos, awards or next steps."]]}});
(function(){var GR=["linear-gradient(135deg,#6e0f1f,#15110f)","linear-gradient(160deg,#d8b36a,#a3182b)","linear-gradient(120deg,#3a1450,#c1272d)","linear-gradient(150deg,#15110f,#d8b36a)"],K=["w","t","","w","t",""];
var dg=$("pm"),deck=$("deck"),order=[],cs=[];
$("pj").innerHTML=PROJECTS.map(function(p,i){return'<figure class="tile '+K[i%6]+' rv" tabindex="0" role="button" aria-label="Open '+esc(p.name)+'" data-i="'+i+'"><div style="background:'+GR[i%4]+'"></div><figcaption>'+esc(p.name)+' · '+p.tag+'</figcaption></figure>'}).join("");
document.querySelectorAll("#pj .rv").forEach(function(el){io.observe(el)});
function layout(){order.forEach(function(ci,k){var c=cs[ci];c.style.setProperty("--k",k);c.tabIndex=k?-1:0;c.setAttribute("aria-hidden",k?"true":"false")})}
function go(ci){var k=order.indexOf(ci),n=k||1;for(var j=0;j<n;j++)order.push(order.shift());layout()}
function open(i){var p=PROJECTS[i];$("pmt").textContent=p.name;$("pmo").textContent=p.ov;$("pma").textContent=p.au.n;$("pml").href=p.au.li;$("pmg").href=p.au.gh;
 deck.innerHTML=p.cards.map(function(c,j){return'<div class="dc" role="button" data-c="'+j+'"><small>'+(j+1)+' / '+p.cards.length+'</small><h4>'+c[0]+'</h4>'+(Array.isArray(c[1])?'<div class="tg">'+c[1].map(function(t){return"<span>"+t+"</span>"}).join("")+"</div>":"<p>"+esc(c[1])+"</p>")+"</div>"}).join("");
 cs=[].slice.call(deck.children);order=cs.map(function(_,j){return j});layout();
 cs.forEach(function(c,j){c.onclick=function(){go(j)};c.onkeydown=function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();go(j)}}});
 document.body.style.overflow="hidden";dg.showModal()}
$("pj").addEventListener("click",function(e){var t=e.target.closest(".tile");if(t)open(+t.dataset.i)});
$("pj").addEventListener("keydown",function(e){var t=e.target.closest(".tile");if(t&&(e.key==="Enter"||e.key===" ")){e.preventDefault();open(+t.dataset.i)}});
$("pmx").onclick=function(){dg.close()};dg.addEventListener("click",function(e){if(e.target===dg)dg.close()});dg.addEventListener("close",function(){document.body.style.overflow=""})})();
