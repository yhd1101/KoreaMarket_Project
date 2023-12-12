import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const ratingGetId = async (id) => {
    const { data } = await axios.get(`http://localhost:8000/api/rating/${id}`)
    return data
}


const useFetchRatingById = (id) =>
    useQuery(["rating", id], () => ratingGetId(id))


export default useFetchRatingById;