import axios from "axios";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const changePassword = async (userInput) => {
    const { data } = await axios.post("http://localhost:8000/api/auth/change/password", userInput)
    return data
}

const useChangePassword = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (userInput) => changePassword(userInput),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['result']
            })
        }
    })
}

export default useChangePassword;