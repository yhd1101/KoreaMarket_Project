import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchPurchase = async () => {
    const token = await localStorage.getItem("token")
    const config = {
        headers: {
            Authorization: "bearer " + token
        }
    }
    const {data} = await axios.get("http://localhost:8000/api/reservation/purchase", config)
    return data.data;
}

const useFetchPurchase = () =>
    useQuery(["purchase"], () => fetchPurchase(), {
        keepPreviousData: true
    })


export default useFetchPurchase