import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchMoneyInfo = async () => {
    const { data } = await axios.get("https://api.currencyfreaks.com/latest?apikey=a5ee29096c0f4d4f92c8dd7c4fd86a2a");
    return data;
};

const useFetchMoney = () => {
    return useQuery(['money'], fetchMoneyInfo, {
        keepPreviousData: true
    });
};

export default useFetchMoney;
