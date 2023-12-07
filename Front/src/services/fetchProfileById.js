import axios from "axios";
import {useQuery} from "@tanstack/react-query";


const fetchProfileById = async () => {

    const token = localStorage.getItem("token")
    const config = {
        headers : {
            Authorization: "Bearer " + token
        }
    }
    const { data } = await axios.get('http://localhost:8000/api/auth/profile', config)
    return data.data.data; // 데이터를 반환합니다.
}
const useFetchProfileById = (id) =>
    useQuery(["profile"], ()=> fetchProfileById(), {
        keepPreviousData: true
    })


export default useFetchProfileById;