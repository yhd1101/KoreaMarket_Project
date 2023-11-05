import axios from "axios";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const verifyEmail = async (userInput) => {
    console.log("55555!!", userInput)
    const { data, status } =  await axios.post("http://localhost:8000/api/auth/send/email", userInput)
    console.log("22221!!", data)
    console.log("3333!", status)
    return data
}


const useVerifyEmail= () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (userInput) => {
            console.log("111@@@", userInput)
            verifyEmail(userInput)
        },
        onSuccess: (data) => {
            console.log("77777!!", data)
            queryClient.invalidateQueries({
                queryKey: ['result'],
            })
        },
        onError:(error => console.log("00000+++",error.message))
    })
}

export default useVerifyEmail;