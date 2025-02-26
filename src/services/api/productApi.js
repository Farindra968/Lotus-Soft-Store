import config from "@/config/config"
import axios from "axios"

/// Fetching Product
const getProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    return response.data;
};


/// Fetching Single Product
const getProductByID = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return response.data;
};

/// Fecthing Single Product Categories 
const getProductByCategory = async (category) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
};

/// Fetching Multiple Product Categories
const getAllCategories = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/categories`);
    return response.data;
}

export { getProduct, getProductByCategory, getAllCategories, getProductByID };