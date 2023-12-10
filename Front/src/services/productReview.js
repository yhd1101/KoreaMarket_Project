import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchProductReview = async (id) =>  {
    const { data } = await axios.get(`http://localhost:8000/api/rating/${id}`)
    return data
}

const useFetchProductReviewById = (id) =>
    useQuery(["review", id], () => fetchProductReview(id))

export default useFetchProductReviewById