import axios from "axios";

const authApi = axios.create({
    baseUrl : "http://localhost:8000/api/auth"
})

export default authApi;