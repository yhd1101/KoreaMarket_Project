import axios from "axios";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const newPassword = async (userInput) => {
    const token = await localStorage.getItem("token")
    const config = {
        headers: {
            Authorization: "bearer " + token
        }
    }
    const { data } = await axios.post("http://localhost:8000/api/auth/newpassword", userInput, config)
}

const useNewPassword = () => {
    const queryClient = useQueryClient()
   return useMutation({
       mutationFn: (userInput) => {
           newPassword(userInput)
       },
       onSuccess: (data) => {
           queryClient.invalidateQueries({
               queryKey: ['newPassword']
           })
       }
   })
}

export default useNewPassword;