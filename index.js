import{a as d,S as f,i}from"./assets/vendor-MgecxatS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m="https://pixabay.com/api/",p="54232981-c31f974ffcf6297d84a7e0e1d";function y(s){return d.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionsDelay:250});function g(){c.innerHTML=""}function L(s){const t=s.map(r=>`
       <li class='gallery-item'>
       <a href='${r.largeImageURL}'>
       <img 
       src='${r.webformatURL}'
       alt='${r.tags}'
       loading = 'lazy'
       />
       </a>
       <div class="info">
          <p>Likes: ${r.likes}</p>
          <p>Views: ${r.views}</p>
          <p>Comments: ${r.comments}</p>
          <p>Downloads: ${r.downloads}</p>
        </div>
       </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function w(){u.classList.remove("hidden")}function b(){u.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){i.warning({message:"Please enter a search query"});return}console.log(t),g(),w(),y(t).then(r=>{if(r.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(r.hits)}).catch(()=>{console.log(error),i.error({title:"Error",message:"Sorry, no images were found"})}).finally(()=>{b(),l.reset()})});
//# sourceMappingURL=index.js.map
