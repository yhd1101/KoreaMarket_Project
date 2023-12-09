import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateReservation = async (userInput,id) => {
    const token = await localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: "bearer " + token
        }
    };
    console.log("dadsad",`http://localhost:8000/api/reservation/${id}`)

    const { data } = await axios.put(`http://localhost:8000/api/reservation/${id}`, userInput, config);


    return { data };
};

const useUpdateReservation = (id) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data) => {
            console.log("12345",data, id)
            updateReservation(data, id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['profile'],
            });
        }
    });
};


export default useUpdateReservation;
