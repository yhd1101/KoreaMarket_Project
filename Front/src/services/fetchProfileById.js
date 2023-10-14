import axios from "axios";
import {useQuery} from "@tanstack/react-query";


const fetchProfileById = async () => {

    const token = localStorage.getItem("token")
    const config = {
        headers : {
            Authorization: "Bearer " + token
        }
    }
    console.log("s........", config)
    const { data } = await axios.get("http://localhost:8000/api/auth", config)
    console.log("2222222222",config)
    console.log("111111111111", data)
    return data; // 데이터를 반환합니다.
}
const useFetchProfileById = () =>
    useQuery(["profile"], ()=> fetchProfileById(), {
        keepPreviousData: true
    })


export default useFetchProfileById;