import authApi from "./api";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";

const signupUser = async (userInput) => {
    const { data } = await axios.post("http://localhost:8000/api/auth/signup", userInput)
    console.log("333333333333",data)
    return data
}

const useSignupUser= () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (userInput) => signupUser(userInput),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['user',data.email],
            })
        }
    })
}



export default useSignupUser