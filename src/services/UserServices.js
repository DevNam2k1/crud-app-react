import axios from "./customer-axios";

const fetchAllUser = (pageNumber) => {
    return axios.get(`/api/users?page=${pageNumber}`)
}

export {fetchAllUser};