import axios from "axios";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const newPassword = async (userInput) => {
    const { data } = await axios.post("http://localhost:8000/api/auth/newpassword", userInput)
    return data;
}

const useNewPassword = () => {
    const queryClient =  useQueryClient
    return useMutation({
        mutationFn: (userInput) => newPassword(userInput),
    })
}

export default useNewPassword;