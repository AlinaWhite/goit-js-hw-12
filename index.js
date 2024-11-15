import{a as f,S as L,i as h}from"./assets/vendor-Cn7RiZ6s.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const g=r=>`
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
    `;f.defaults.baseURL="https://pixabay.com/api/";const p=(r,t)=>{const o={params:{q:r,image_type:"photo",orientation:"horizontal",per_page:15,page:t,safesearch:!0,key:"46938898-491ce0dea342e81df1da49dcf"}};return f.get("",o)},m=document.querySelector(".search-form"),u=document.querySelector(".gallery"),c=document.querySelector(".loader"),l=document.querySelector(".load-button");let y=new L(".gallery a"),i=1,n="";const _=async r=>{try{r.preventDefault(),n=m.elements.searchQuery.value.trim(),i=1,c.classList.remove("is-hidden");const t=await p(n,i);if(n.trim()==="")return;if(t.data.hits.length===0){l.classList.add("is-hidden"),h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u.innerHTML="",m.reset();return}const o=t.data.hits.map(a=>g(a)).join("");u.innerHTML=o,l.classList.remove("is-hidden"),y.refresh()}catch(t){console.log(t)}finally{c.classList.add("is-hidden")}},b=async r=>{i++;try{c.classList.remove("is-hidden");const t=await p(n,i),o=t.data.hits.map(s=>g(s)).join("");u.insertAdjacentHTML("beforeend",o),y.refresh();const e=document.querySelector(".gallery-item__image").getBoundingClientRect().height;if(window.scrollBy({top:2*e,behavior:"smooth"}),i===Math.ceil(t.data.total/15)){l.classList.remove("is-hidden"),h.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}}catch(t){console.log(t)}finally{c.classList.add("is-hidden")}};m.addEventListener("submit",_);l.addEventListener("click",b);
//# sourceMappingURL=index.js.map
