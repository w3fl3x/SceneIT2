import React, { Component } from "react";
import Item from "../components/Item";
import "../App.css";
import API from "../utils/API";
import "../components/Search/Search.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardDeck } from "react-bootstrap";
import axios from "axios";

require("dotenv").config();

class Home extends Component {
  state = {
    movies: [],
    q: "",
    message: "Search For A Movie!"
  };
  componentDidMount() {
    this.loadUserList();
  }
  
  loadUserList = () => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US
    route*`).then(res => {
      console.log(res.data);
      this.setState({ movies: res.data.results });
  })
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getMovies(this.state.q).then(res => {
      console.log(res.data);
      this.setState({ movies: res.data.results });
    });
  };

  render() {
    return (
      <div className="App">
        <div className="search">
          <form>
            <div className="form-group mx-sm-3">
              <label htmlFor="Query">
                <strong>Movie Search</strong>
              </label>
              <input
                className="form-control"
                id="Title"
                type="text"
                value={this.state.q}
                placeholder="Ready Player One"
                name="q"
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="center">
              <button
                onClick={this.handleFormSubmit}
                type="submit"
                className="btn btn-md btn-secondary"
              >
                <i className="fas fa-search"></i>
                &nbsp; Search
              </button>
            </div>
          </form>
        </div>
        <CardDeck style={{ padding: "10px", justifyContent: "space-around" }}>
          {this.state.movies.length > 0 &&
            this.state.movies.map(
              ({
                title,
                id,
                poster_path,
                vote_average,
                release_date,
                overview
              }) => (
                <Item
                  key={id}
                  title={title}
                  posterPath={poster_path}
                  voteAverage={vote_average}
                  releaseDate={release_date}
                  summary={overview}
                />
              )
            )}
        </CardDeck>
      </div>
    );
  }
}

export default Home;
