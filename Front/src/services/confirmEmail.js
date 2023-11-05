import axios from "axios";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const confirmEmail = async (userInput) => {
    const data = await axios.post("http://localhost:8000/api/auth/confirm/email", userInput)
    return data
}

const useConfrimMail = () => {
    const quertClient = useQueryClient()
    return useMutation({
        mutationFn: (userInput) => confirmEmail(userInput),
    })
}

export default useConfrimMail