import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchCommentById = async (id) => {
    const { data } = await axios.get(`http://localhost:8000/api/comment/${id}`)
    console.log("Commentsss: ", data)
    return data
}

const useFetchCommentById = (id) =>
    useQuery(["comment", id], () => fetchCommentById(id))


export default useFetchCommentById;