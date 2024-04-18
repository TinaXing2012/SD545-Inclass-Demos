import http from '../axios';

const getAll = () => {
    return http.get('/products');
}

const deleteProductById = (id: number) => {
    return http.delete(`/products/${id}`);
}

export default {
    getAll,
    deleteProductById
}