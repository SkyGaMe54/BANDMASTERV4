import"./hoisted.BVUGWrqj.js";document.querySelectorAll('[id^="faq-button-"]').forEach(e=>{e.addEventListener("click",()=>{const s=e.id.split("-").pop(),o=document.getElementById(`faq-answer-${s}`),d=e.querySelector("svg");o.classList.toggle("hidden"),d.style.transform=o.classList.contains("hidden")?"rotate(0deg)":"rotate(180deg)",document.querySelectorAll('[id^="faq-answer-"]').forEach(t=>{if(t.id!==`faq-answer-${s}`){t.classList.add("hidden");const n=document.getElementById(`faq-button-${t.id.split("-").pop()}`);n.querySelector("svg").style.transform="rotate(0deg)"}})})});