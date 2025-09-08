import axios from "axios";
import * as dotenv from "dotenv"
dotenv.config()

export default function axiosClientSitemap(){
    return axios.create({
        baseURL: process.env.VITE_API_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.VITE_API_KEY,
            "Access-Control-Allow-Origin": "*"
        },
    });
} 