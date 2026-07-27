import axios from "axios";

const API = axios.create({
    baseURL: "https://secure-jwt-authentication-system-backend.onrender.com"
});

export default API;