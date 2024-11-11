export const galleryCard = imgEl => {
    return `
    <a class="gallery-link" href="${imgEl.largeImageURL}">    
                   <div class="gallery-item">
                       <img class="gallery-item__image" src="${imgEl.webformatURL}" alt="${imgEl.tags}" loading="lazy" />
                       <div class="info">
                           <p class="info__item">
                           <b class="info__item-name">Likes</b>
                           ${imgEl.likes}
                           </p>
                           <p class="info__item">
                           <b class="info__item-name">Views</b>
                           ${imgEl.views}
                           </p>
                           <p class="info__item">
                           <b class="info__item-name">Comments</b>
                           ${imgEl.comments}
                           </p>
                           <p class="info__item">
                           <b class="info__item-name">Downloads</b>
                           ${imgEl.downloads}
                           </p>
                       </div>
                   </div>
               </a>
    `
   }


    