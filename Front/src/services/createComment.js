import axios from "axios";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useAuthContext} from "../context/AuthContext";

const createComment = async (userInput) => {
    const token =  await localStorage.getItem("token")
    const config  = {
        headers: {
            Authorization: "bearer " + token
        }
    }
    const { data } = await axios.post("http://localhost:8000/api/comment/create", userInput, config)
    return { data }
}

const useCreateComment = () => {
    const queryClinet = useQueryClient()
    return useMutation( {
        mutationFn: (userInput)=> {
            createComment(userInput)
        },
        onSuccess: (data) => {
            queryClinet.invalidateQueries({
                queryKey: ['comment'],
            })
        }
    })
}
export default useCreateComment;