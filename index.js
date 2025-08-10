import{a as f,S as d,i as a}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="51710897-f9d3bb10ca12010c1e23c8ef5",y="https://pixabay.com/api/";async function h(i){const r={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(y,{params:r})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:m,downloads:p})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${t}</p>
          <p class="info-item"><b>Views</b> ${s}</p>
          <p class="info-item"><b>Comments</b> ${m}</p>
          <p class="info-item"><b>Downloads</b> ${p}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){l.innerHTML=""}function v(){u.classList.add("is-visible")}function w(){u.classList.remove("is-visible")}const c=document.querySelector(".form"),q=document.querySelector('input[name="search-text"]');c.addEventListener("submit",i=>{i.preventDefault();const r=q.value.trim();if(r===""){a.warning({title:"Warning",message:"Search input must not be empty!",position:"topRight"});return}S(),v(),h(r).then(o=>{o.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(o.hits)}).catch(o=>{console.error(o),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{w(),c.reset()})});
//# sourceMappingURL=index.js.map
