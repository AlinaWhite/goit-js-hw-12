import axiox from "axios";

const URL = 'https://pixabay.com/api/';


export const fetchImages = searchValueImput => {
    const urlParams = {
        params:{
        q: searchValueImput,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        key: '46938898-491ce0dea342e81df1da49dcf',}
    };


return axiox.get(`${URL}`,urlParams);
};