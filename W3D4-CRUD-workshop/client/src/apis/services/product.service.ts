import http from '../axios';

const getAll = () => {
    return http.get('/products');
}

export default {
    getAll
}