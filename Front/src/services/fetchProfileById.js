import axios from "axios";
import {useQuery} from "@tanstack/react-query";


const fetchProfileById = async (id) => {

    const token = localStorage.getItem("token")
    const config = {
        headers : {
            Authorization: "Bearer " + token
        }
    }
    const { data } = await axios.get(`http://localhost:8000/api/auth/${id}`, config)
    return data.data.data; // 데이터를 반환합니다.
}
const useFetchProfileById = (id) =>
    useQuery(["profile",id], ()=> fetchProfileById(id), {
        keepPreviousData: true
    })


export default useFetchProfileById;