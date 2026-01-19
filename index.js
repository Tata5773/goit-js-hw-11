import{a as d,S as f,i}from"./assets/vendor-MgecxatS.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const p="https://pixabay.com/api/",m="54232981-c31f974ffcf6297d84a7e0e1d";function y(s){return d.get(p,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionsDelay:250});function g(){l.innerHTML=""}function L(s){const r=s.map(t=>`
       <li class='gallery-item'>
       <a href='${t.largeImageURL}'>
       <img 
       src='${t.webformatURL}'
       alt='${t.tags}'
       loading = 'lazy'
       />
       </a>
       <div class="info">
          <p>Likes: ${t.likes}</p>
          <p>Views: ${t.views}</p>
          <p>Comments: ${t.comments}</p>
          <p>Downloads: ${t.downloads}</p>
        </div>
       </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function w(){u.classList.remove("hidden")}function b(){u.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){i.warning({message:"Please enter a search query"});return}console.log(r),g(),w(),y(r).then(t=>{if(t.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(t.hits)}).catch(()=>{i.error({title:"Error",message:"Sorry, no images were found",position:"topRight"})}).finally(()=>{b(),c.reset()})});
//# sourceMappingURL=index.js.map
