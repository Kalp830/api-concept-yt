import axios from "axios";

const api = axios.create({
    baseURL:"http://www.omdbapi.com/"
})

export const getMovie = () => {
    return api.get("?s=iron&apikey=61ca2fdb")
};