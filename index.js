import{a as f,S as L,i as h}from"./assets/vendor-Cn7RiZ6s.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g=s=>`
    <a class="gallery-link" href="${s.largeImageURL}">    
                   <div class="gallery-item">
                       <img class="gallery-item__image" src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
                       <div class="info">
                           <p class="info__item">
                           <b class="info__item-name">Likes</b>
                           ${s.likes}
                           </p>
                           <p class="info__item">
                           <b class="info__item-name">Views</b>
                           ${s.views}
                           </p>
                           <p class="info__item">
                           <b class="info__item-name">Comments</b>
                           ${s.comments}
                           </p>
                           <p class="info__item">
                           <b class="info__item-name">Downloads</b>
                           ${s.downloads}
                           </p>
                       </div>
                   </div>
               </a>
    `;f.defaults.baseURL="https://pixabay.com/api/";const p=(s,t)=>{const o={params:{q:s,image_type:"photo",orientation:"horizontal",per_page:16,page:t,safesearch:!0,key:"46938898-491ce0dea342e81df1da49dcf"}};return f.get("",o)},d=document.querySelector(".search-form"),m=document.querySelector(".gallery"),i=document.querySelector(".loader"),n=document.querySelector(".load-button");let y=new L(".gallery a"),c=1,u="";const _=async s=>{try{s.preventDefault(),u=d.elements.searchQuery.value.trim(),c=1,i.classList.remove("is-hidden");const t=await p(u,c);if(t.data.hits.length===0){n.classList.add("is-hidden"),h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m.innerHTML="",d.reset();return}const o=t.data.hits.map(a=>g(a)).join("");m.innerHTML=o,n.classList.remove("is-hidden"),y.refresh()}catch(t){console.log(t)}finally{i.classList.add("is-hidden")}},b=async s=>{c++;try{i.classList.remove("is-hidden");const t=await p(u,c),o=t.data.hits.map(r=>g(r)).join("");m.insertAdjacentHTML("beforeend",o),y.refresh();const e=document.querySelector(".gallery-item__image").getBoundingClientRect().height;if(window.scrollBy({top:2*e,behavior:"smooth"}),t.data.hits>=totalHits){n.classList.remove("is-hidden"),h.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}}catch(t){console.log(t)}finally{i.classList.add("is-hidden")}};d.addEventListener("submit",_);n.addEventListener("click",b);
//# sourceMappingURL=index.js.map
