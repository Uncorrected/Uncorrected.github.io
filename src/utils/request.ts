import axios from 'axios';

const instance = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});
instance.interceptors.response.use(response => {
    // return Promise.resolve(response.data);
    return response.data;
}, error => {
    // console.log(error)
    return Promise.reject(error.response.data);
})

export default instance;
