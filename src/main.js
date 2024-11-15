import { galleryCard } from "./js/render.functions";
import { fetchImages } from "./js/pixabay-api";
import SimpleLightbox from "simplelightbox";
import iziToast from "izitoast";
import "simplelightbox/dist/simple-lightbox.min.css";
import axiox from "axios";


const serchForm = document.querySelector('.search-form');
const galerySerch = document.querySelector('.gallery');
const loaderQ = document.querySelector('.loader')
const loadMore = document.querySelector('.load-button')


let gallery = new SimpleLightbox('.gallery a');
let currentPage =1;
let searchValue ='';

const submitForm = async event => {
    try {
        event.preventDefault();

        searchValue = serchForm.elements.searchQuery.value.trim();

        currentPage =1;
        loaderQ.classList.remove('is-hidden');

        const response =  await fetchImages(searchValue, currentPage);
        
        if (response.data.hits.length === 0){
            loadMore.classList.add('is-hidden');
                iziToast.error ({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: 'topRight',
             });

             
              galerySerch.innerHTML = '';
              serchForm.reset();
              return
            }

         const imgCard = response.data.hits.map(imgDetails => galleryCard(imgDetails)).join('');
         galerySerch.innerHTML = imgCard;
         loadMore.classList.remove('is-hidden');
         gallery.refresh(); 
    } catch (err) {
        console.log(err);
    } finally {
        loaderQ.classList.add('is-hidden');
    }
};

const onLoadMoreBtn = async event => {
    currentPage++;
    try {
        loaderQ.classList.remove('is-hidden');
        const response =  await fetchImages(searchValue, currentPage);

        const imgCard = response.data.hits
        .map(imgDetails => galleryCard(imgDetails))
        .join('');
        

        galerySerch.insertAdjacentHTML('beforeend' ,imgCard);
        gallery.refresh(); 


        const galleryEl = document.querySelector('.gallery-item__image');
        const imgHeight = galleryEl.getBoundingClientRect().height;
        window.scrollBy({
            top: 2 * imgHeight,
            behavior: 'smooth',
        });

        if (response.data.hits >= totalHits){
            loadMore.classList.remove('is-hidden');
            iziToast.error ({
              message: "We're sorry, but you've reached the end of search results.",
              position: 'topRight',
           });
            return
          }
        
    } catch(err){
        console.log(err);
    } finally{
        loaderQ.classList.add('is-hidden');
    }

};


    serchForm.addEventListener('submit', submitForm);
    loadMore.addEventListener('click', onLoadMoreBtn);
