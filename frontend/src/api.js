import axios from "axios";

const API = axios.create({
    baseURL: "https://secure-jwt-authentication-system.onrender.com"
});

export default API;