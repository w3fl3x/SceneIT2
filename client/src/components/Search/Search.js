import React, { Component } from "react";
import Item from "../../components/Item";
import API  from "../../utils/API";
import './Search.css';

class Search extends Component {
  state = {
      movies: [],
      q: "",
      message: "Search For A Movie!"
  };

  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
          [name]: value
      });
  };

  handleFormSubmit = event => {
      event.preventDefault();
      console.log("I'm here on submit!")
      API.getMovies(this.state.q)
      .then(res => {
        console.log(res.data);
      }); 
  };

  render() {
    return (
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
            &nbsp;
            Search
            </button>
        </div>
      </form>
    </div>
    );
  }
}

export default Search;