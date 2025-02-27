import axios from "axios";

const getCart = () => {
    const response = axios.get(`https://fakestoreapi.com/carts`);
    return response.data
}

export { getCart };


