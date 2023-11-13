import axios from "axios";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const createProduct = async (userInput) => {
    const token = await localStorage.getItem("token")
    const config = {
        headers: {
            Authorization: "bearer " + token
        }
    }

    const { data } = await axios.post("http://localhost:8000/api/product/create", userInput, config)

    return { data }
}


const useCreateProduct = () => {
    const queryClient = useQueryClient()
    return useMutation( {
        mutationFn: (userInput)=> {
            createProduct(userInput)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['product'],
            })
        }
    })
}

export default useCreateProduct;