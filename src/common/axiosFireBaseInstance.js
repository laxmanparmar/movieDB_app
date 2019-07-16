import axios from 'axios';

const axiosFireBaseInstance = axios.create({
    baseURL : 'https://my-burger-app-21c06.firebaseio.com/'
})

export default axiosFireBaseInstance;