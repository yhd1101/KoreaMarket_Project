import axios from "axios";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const sendMail = async (userInput) => {
    const { data } = await  axios.post("http://localhost:8000/api/auth/forgot/password", userInput)
    return data;
}

const useSendMail = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (userInput) => sendMail(userInput),
    })
}
export default useSendMail;