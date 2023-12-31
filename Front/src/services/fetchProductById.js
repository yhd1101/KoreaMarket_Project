import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import React from "react";

const fetchProductById = async (id) => {
    const { data } = await axios.get(`http://localhost:8000/api/product/${id}`)
    console.log("dsdsd13", data)
    return data.data
}

const useFetchProductById = (id) =>
    useQuery(["product", id], () => fetchProductById(id))


export default useFetchProductById;