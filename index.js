import{a as f,S as L,i as h}from"./assets/vendor-Cn7RiZ6s.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const p=r=>`
    <a class="gallery-link" href="${r.largeImageURL}">    
                   <div class="gallery-item">
                       <img class="gallery-item__image" src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
                       <div class="info">
                           <p class="info__item">
                           <b class="info__item-name">Likes</b>
                           ${r.likes}
                           </p>
                           <p class="info__item">
                           <b class="info__item-name">Views</b>
                           ${r.views}
                           </p>
                           <p class="info__item">
                           <b class="info__item-name">Comments</b>
                           ${r.comments}
                           </p>
                           <p class="info__item">
                           <b class="info__item-name">Downloads</b>
                           ${r.downloads}
                           </p>
                       </div>
                   </div>
               </a>
    `;f.defaults.baseURL="https://pixabay.com/api/";const y=(r,t)=>{const o={params:{q:r,image_type:"photo",orientation:"horizontal",per_page:16,page:t,safesearch:!0,key:"46938898-491ce0dea342e81df1da49dcf"}};return f.get("",o)},l=document.querySelector(".search-form"),d=document.querySelector(".gallery"),n=document.querySelector(".loader"),u=document.querySelector(".load-button");let g=new L(".gallery a"),i=1,m="";const _=async r=>{try{r.preventDefault(),m=l.elements.searchQuery.value.trim(),n.classList.remove("is-hidden");const t=await y(m,i);if(t.data.hits.length===0){h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d.innerHTML="",l.reset();return}const o=t.data.hits.map(a=>p(a)).join("");d.innerHTML=o,u.classList.remove("is-hidden"),g.refresh()}catch(t){console.log(t)}finally{n.classList.add("is-hidden")}},b=async r=>{i++;try{n.classList.remove("is-hidden");const t=await y(m,i),o=t.data.hits.map(s=>p(s)).join("");i=1,d.insertAdjacentHTML("beforeend",o),g.refresh();const e=document.querySelector("gallery-item__image").getBoundingClientRect();if(window.scrollBy({top:2*e,behavior:"smooth"}),t.data.hits>=totalHits){u.classList.add("is-hidden"),h.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}}catch(t){console.log(t)}finally{n.classList.add("is-hidden")}};l.addEventListener("submit",_);u.addEventListener("click",b);
//# sourceMappingURL=index.js.map
