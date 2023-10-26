import axios from "axios";
import {useMutation, useQueryClient} from "@tanstack/react-query";
const createReservation = async  (userInput) => {
    const token = await localStorage.getItem("token")
    const config = {
        headers: {
            Authorization: "bearer " + token
        }
    }

    const { data } = await axios.post("http://localhost:8000/api/reservation", userInput, config)
    return data
}



const useCreateReservation = () => {
    const queryClinet = useQueryClient()
    return useMutation( {
        mutationFn: (userInput)=> {
            createReservation(userInput)
        },
        onSuccess: (data) => {
            queryClinet.invalidateQueries({
                queryKey: ['reservation'],
            })
        }
    })
}

export default useCreateReservation;