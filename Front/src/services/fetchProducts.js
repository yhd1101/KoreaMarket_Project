// services/fetchProducts.js

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (page) => {
    const { data } = await axios.get(`http://localhost:8000/api/product`);
    return data.data;
};

const useFetchProducts = (page) =>
    useQuery(["products", page], () => fetchProducts(page), {
        keepPreviousData: true,
    });

export default useFetchProducts;
