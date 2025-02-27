import axios from "axios"

/// Login Post Method
const postLogin = async (username, password) => {
    const response = await axios.post(`https://fakestoreapi.com/auth/login`, JSON.stringify({ username, password }), {
        headers: {
            "Content-Type": 'application/json',
        }
    });
    return response.data;
};

/// Get User 
const getUser = async () => {
    const response = await axios.get(`https://fakestoreapi.com/users`);
    return response.data;
}


export {postLogin, getUser}