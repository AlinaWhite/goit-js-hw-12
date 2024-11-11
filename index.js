import{a as m,S as d,i as f}from"./assets/vendor-Cn7RiZ6s.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=t=>`
    <a class="gallery-link" href="${t.largeImageURL}">    
                   <div class="gallery-item">
                       <img class="gallery-item__image" src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
                       <div class="info">
                           <p class="info__item">
                           <b class="info__item-name">Likes</b>
                           ${t.likes}
                           </p>
                           <p class="info__item">
                           <b class="info__item-name">Views</b>
                           ${t.views}
                           </p>
                           <p class="info__item">
                           <b class="info__item-name">Comments</b>
                           ${t.comments}
                           </p>
                           <p class="info__item">
                           <b class="info__item-name">Downloads</b>
                           ${t.downloads}
                           </p>
                       </div>
                   </div>
               </a>
    `,p="https://pixabay.com/api/",y=t=>{const s={params:{q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"46938898-491ce0dea342e81df1da49dcf"}};return m.get(`${p}`,s)},n=document.querySelector(".search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new d(".gallery a");const g=async t=>{try{t.preventDefault();const s=n.elements.searchQuery.value.trim();l.classList.remove("is-hidden");const o=await y(s);if(o.data.hits.length===0){f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",n.reset();return}const a=o.data.hits.map(e=>u(e)).join("");c.innerHTML=a,h.refresh()}catch(s){console.log(s)}finally{l.classList.add("is-hidden")}};n.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
