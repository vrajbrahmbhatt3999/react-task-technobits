export const BASE_URL = "https://api.themoviedb.org/3"
export default {
    default: {
        baseurl: BASE_URL,
        dashboard: BASE_URL + "/discover/movie?api_key=26eb8fe0ea17478b691097b4e10c4ac9",
        movie_details: BASE_URL + "/movie/:id?api_key=26eb8fe0ea17478b691097b4e10c4ac9",
        search: BASE_URL + "/search/movie?api_key=26eb8fe0ea17478b691097b4e10c4ac9&query=data",
        discover: BASE_URL + "/discover/movie?api_key=26eb8fe0ea17478b691097b4e10c4ac9&query=page"
    }
}