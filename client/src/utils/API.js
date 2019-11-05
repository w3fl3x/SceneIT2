import axios from "axios";
import API_KEY from "./config";


export default {
    getMovies: function(query) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query= + ${query}`)
  }
};
