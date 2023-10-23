import axios from "axios";
import {useQuery} from "@tanstack/react-query";


const fetchProfileById = async (id) => {

    const token = localStorage.getItem("token")
    const config = {
        headers : {
            Authorization: "Bearer " + token
        }
    }
    console.log("s........", config)
    const { data } = await axios.get(`http://localhost:8000/api/auth/${id}`, config)
    console.log("2222222222",config)
    console.log("111111111111", data)
    return data.data.data; // 데이터를 반환합니다.
}
const useFetchProfileById = (id) =>
    useQuery(["profile",id], ()=> fetchProfileById(id), {
        keepPreviousData: true
    })


export default useFetchProfileById;