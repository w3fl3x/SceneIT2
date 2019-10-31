import axios from "axios";


export default {
    getMovies: function(query) {
    return axios.get("https://api.themoviedb.org/3/search/movie?api_key=254cd713084221bba3f79e9929c4662b&language=en-US&query=" + query)
  }
};
