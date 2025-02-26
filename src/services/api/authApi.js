import axios from "axios"

/// Login Post Method
const postLogin = async ({username, password}) => {
    const response = await axios.post(`https://fakestoreapi.com/auth/login`,{username, password});
    return response.data;
}


export {postLogin}