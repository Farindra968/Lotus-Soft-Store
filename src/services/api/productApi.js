import config from "@/config/config";
import axios from "axios";
import { apiToken } from "./apiToken";

/// Fetching Product
const getProduct = async () => {
  const response = await axios.get(`https://fakestoreapi.com/products?limit=50`);
  return response.data;
};

/// Fetching Single Product
const getProductByID = async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};

/// Fecthing Single Product Categories
const getProductByCategory = async (category) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return response.data;
};

/// Fetching Multiple Product Categories
const getAllCategories = async () => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/categories`
  );
  return response.data;
};

/// Post Method to Post Product
const postProduct = (data) => {
  const response = axios.post(
    `https://fakestoreapi.com/products`,
    JSON.stringify({ data }),
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export {
  getProduct,
  getProductByCategory,
  getAllCategories,
  getProductByID,
  postProduct,
};
