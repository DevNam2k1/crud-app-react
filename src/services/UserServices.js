import axios from "./customer-axios";

const fetchAllUser = (pageNumber) => {
    return axios.get(`/api/users?page=${pageNumber}`)
}

const createUser = (name, job) => {
    return axios.post("/api/users", {name, job})
}
export {fetchAllUser , createUser};