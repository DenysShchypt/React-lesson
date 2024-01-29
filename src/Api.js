import axios from 'axios';

axios.defaults.baseURL = 'https://fakestoreapi.com/products'

export const fetchGetAll = async () => {
    const { data } = await axios.get();
    return data
};
export const fetchGetOne = async (productId) => {
    const { data } = await axios.get(
        `/${productId}`
    );
    return data;
};
export const fetchGetOneProductTitle = async (title) => {
    const { data } = await axios.get(
        `/?sort='${title}`
    );
    return data;
};