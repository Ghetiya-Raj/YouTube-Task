import axios from "axios";

export default function api(){
    return axios.create({
        baseURL:"https://yt-assesment.onrender.com/api/v1"
    })
}