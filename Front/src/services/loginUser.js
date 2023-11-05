import authApi from "./api";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {useAuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

const loginUser = async (userInput) => {
    const { data } = await axios.post("http://localhost:8000/api/auth/login", userInput)
    console.log("2222222222", data)
    return data
}

const useLoginUser = () => {
    const queryClient = useQueryClient()
    const { setUser, setIsAuthed } = useAuthContext()
    return useMutation({
        mutationFn: (userInput) => loginUser(userInput),
        onSuccess: (data) => {
            console.log("+++++wweqeq",data.data.token)
            localStorage.setItem("token", data.data.token)
            localStorage.setItem("userInfo", JSON.stringify(data.data.user))
            setUser(data.user)
            queryClient.invalidateQueries({
                queryKey: ['users'],
            })
        },
        onError:(err) => {
            if(err.response.data.statusCode === 400) {
                alert("please check email and password")

            }
        }
    })
}
export default useLoginUser