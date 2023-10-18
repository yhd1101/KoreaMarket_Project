import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchProducts = async () => {
    const {data} = await axios.get("http://localhost:8000/api/product")
    return data.data.data;
    console.log("213232", data)
}

const useFetchProducts = () =>
    useQuery(["products"], () => fetchProducts(), {
        keepPreviousData: true
    })

export default useFetchProducts;