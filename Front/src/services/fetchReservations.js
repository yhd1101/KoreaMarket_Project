import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchReservations = async(id)  => {
    const { data }  = await axios.get(`http://localhost:8000/api/reservation/${id}`)
    console.log("dsadwqe", data)

    return data;
}

const useFetchReservationById = (id) =>
    useQuery(["reservation", id], () => fetchReservations(id))


export default useFetchReservationById;