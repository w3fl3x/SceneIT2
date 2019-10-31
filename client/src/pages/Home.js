import React, { Component } from "react";
import Content from '../components/Content';
import Item from '../components/Item';
import "../App.css";
import API  from "../utils/API"
import Search from "../components/Search";
class Home extends Component {
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
        <div className="App">
          {/* <Search q={this.state.q} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange}></Search> */}
          <Item />
        </div>
      );
    }
}

export default Home;
