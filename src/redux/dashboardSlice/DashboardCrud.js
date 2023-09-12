import axios from "axios";
import Config from "../../config/Config";

// ************************************************************************

export const Dashboard = (payload) => {
    return axios.get(`${Config.default.dashboard}`, payload)
}

// ************************************************************************

export const Movie = (payload) => {
    return axios.get(`${Config.default.movie_details.replace(":id", payload)}`)
}

// ************************************************************************

export const search = (payload) => {
    return axios.get(`${Config.default.search.replace("data", payload)}`)
}

// ************************************************************************

export const discover = (payload) => {
    return axios.get(`${Config.default.discover.replace("page", payload)}`)
}