(()=>{"use strict";const e=document.getElementById("shipment-list"),n=document.getElementById("shipment-name"),t=document.getElementById("shipment-email"),c=document.getElementById("box-quantity"),s=document.getElementById("shipment-number"),i=document.getElementById("burger-bar"),l=document.getElementById("Xmark"),a=document.getElementById("shipment-list-container"),o=document.getElementById("container");window.onload=async()=>{let i=await async function(){try{const e=await fetch("https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json");return await e.json()}catch(e){return alert(e)}}();var l;i.forEach((e=>function(e){const n=document.getElementById("shipment-list"),t=document.createElement("li");t.innerText=e.name,n.appendChild(t)}(e))),l=i,e.addEventListener("click",(e=>{l.filter((i=>{i.name===e.target.innerHTML&&(n.innerHTML=i.name,t.innerHTML=i.email,c.innerHTML=i.boxes,s.innerHTML=function(e){return null!=e?e.split(",").length:"none"}(i.boxes))}))}))},i.addEventListener("click",(()=>{i.classList.replace("block","none"),l.classList.replace("none","block"),a.classList.replace("shipment-list-container","block"),o.classList.add("none")})),l.addEventListener("click",(()=>{i.classList.replace("none","block"),l.classList.replace("block","none"),a.classList.replace("block","shipment-list-container"),o.classList.replace("none","block")}))})();