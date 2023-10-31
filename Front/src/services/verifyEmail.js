import axios from "axios";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const verifyEmail = async (userInput) => {
    const { data } =  await axios.post("http://localhost:8000/api/auth/send/email", userInput)
    return data
}


const useVerifyEmail= () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (userInput) => verifyEmail(userInput),
        // onSuccess: (data) => {
        //     localStorage.setItem("token", data.token)
        //     queryClient.invalidateQueries({
        //         queryKey: ['result'],
        //     })
        // }
    })
}

export default useVerifyEmail;