import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchMoneyInfo = async () => {
    const { data } = await axios.get("https://api.currencyfreaks.com/latest?apikey=13c39624b2be49dcae2e987f4200390e");
    return data;
};

const useFetchMoney = () => {
    return useQuery(['money'], fetchMoneyInfo, {
        keepPreviousData: true
    });
};

export default useFetchMoney;
