/* Semi-circular scroll timeline (Events page). Replace placeholders with real milestones. */
(function(){var TL=[["2024","Machine Magnet established","Founded in September 2024 at NIET."],["2024","Placeholder: first event","Replace with a real milestone."],["2025","Placeholder: first hackathon","Replace with a real milestone."],["2025","Placeholder: first winners","Replace with a real milestone."],["2025","Placeholder: core team award","Replace with a real milestone."],["2026","Placeholder: new achievement","Replace with a real milestone."],["2026","Placeholder: latest result","Replace with a real milestone."]];
var N=TL.length,STEP=24,wheel=$("wheel"),sec=$("tlw"),cap=$("cap"),cur=-1;
wheel.innerHTML=TL.map(function(t,i){return '<div class="it" style="transform:rotate('+i*STEP+'deg)"><div class="c glass"><b>'+t[0]+'</b><span>'+esc(t[1])+'</span></div></div>'}).join("");
$("tlf").innerHTML=TL.map(function(t){return'<li><b>'+t[0]+'</b> '+esc(t[1])+'<br>'+esc(t[2])+'</li>'}).join("");
var its=wheel.querySelectorAll(".it");
function setCap(i){cur=i;cap.classList.add("sw");setTimeout(function(){$("cy").textContent=TL[i][0];$("ct").textContent=TL[i][1];$("cd").textContent=TL[i][2];cap.classList.remove("sw")},RM?0:180)}
function upd(){if(RM||!sec.offsetParent)return;var r=sec.getBoundingClientRect(),p=clamp(-r.top/(sec.offsetHeight-innerHeight+66),0,1),rot=-p*(N-1)*STEP,act=Math.round(p*(N-1));
 wheel.style.transform="rotate("+rot.toFixed(2)+"deg)";
 its.forEach(function(it,i){var d=Math.abs(i*STEP+rot),c=it.firstChild;c.style.setProperty("--o",clamp(1.15-d/(STEP*3.2),0,1).toFixed(2));c.style.setProperty("--s",(1-clamp(d/(STEP*5),0,.28)).toFixed(3));it.classList.toggle("on",i===act)});
 if(act!==cur)setCap(act)}
addEventListener("scroll",upd,{passive:true});addEventListener("resize",upd);addEventListener("hashchange",function(){setTimeout(upd,80)});if(!RM)setCap(0);upd()})();
