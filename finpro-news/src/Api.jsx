import axios from 'axios';

export const getProducts = async () => {
    const product = await axios.get('https://fakestoreapi.com/products');
    return product;
}