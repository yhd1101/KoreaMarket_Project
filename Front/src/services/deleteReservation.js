import axios from "axios";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

const deleteReservation = async (id) => {
    const token = await localStorage.getItem("token")
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }

    const { data, status } = await axios.delete(`http://localhost:8000/api/reservation/${id}`, config)
    return data.data
}

const useFetchDeleteReservation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id) => {
            deleteReservation(id)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['reservation'],
            })
        }
    })
}
export default useFetchDeleteReservation;