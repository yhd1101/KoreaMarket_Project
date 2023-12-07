import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateReservation = async (userInput, id) => {
    const token = await localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: "bearer " + token
        }
    };

    const { data } = await axios.put(`http://localhost:8000/api/reservation/${id}`, userInput, config);
    console.log("dadsad", data)

    return { data };
};

const useUpdateReservation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (userInput, id) => {
            return updateReservation(userInput, id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['reservation'],
            });
        }
    });
};


export default useUpdateReservation;
