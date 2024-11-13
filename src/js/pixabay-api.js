import axiox from "axios";

axiox.defaults.baseURL = 'https://pixabay.com/api/';


export const fetchImages = (searchValueImput, nextPageNumber) => {
    const urlParams = {
        params:{
        q: searchValueImput,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 16,
        page: nextPageNumber,
        safesearch: true,
        key: '46938898-491ce0dea342e81df1da49dcf',}
    };


return axiox.get('',urlParams);
};