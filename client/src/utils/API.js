import axios from "axios";

require("dotenv").config();

export default {
    getMovies: function(query) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query= + ${query}`)
  }
};
