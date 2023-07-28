// Configuring the Axios Instance for the API

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 
    process.env.NODE_ENV === "production"
        ? "https://secure-gorge-86146-38ded5b1c080.herokuapp.com/"        
        : 
        "http://localhost:4000",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
});

export default axiosInstance;
