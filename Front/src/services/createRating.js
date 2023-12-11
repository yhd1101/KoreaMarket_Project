import axios from "axios";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const createRating = async (userInput) => {
    const token = await localStorage.getItem("token")
    const config = {
        headers: {
            Authorization: "bearer " + token
        }
    }
    const { data } = await axios.post("http://localhost:8000/api/rating", userInput, config)
    return { data }
}


const useCreateRating = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (userInput) => {
            createRating(userInput)
        },
        onSuccess: (data) => [
            queryClient.invalidateQueries({
                queryKey: ['rating']
            })
        ]
    })
}

export default useCreateRating;