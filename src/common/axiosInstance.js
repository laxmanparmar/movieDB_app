import axios from 'axios';

// theMovieDB api key for getting movies list
const axiosInstance = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    params:{
        api_key:'5cbbb5b0ae3a9c7f3a5784c1d32d4202',
        language :'en-US',
        include_adult:false
    }
})

export default axiosInstance;