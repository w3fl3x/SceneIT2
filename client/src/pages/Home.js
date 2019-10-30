import React, { Component } from "react";
import Content from '../components/Content';
import Item from '../components/Item';
import "../App.css";

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

    // getMovies = () => {
    //     API.getMovies(this.state.q)
    //         .then(res =>
    //         this.setState({
    //             movies: res.data
    //         })
    //         )
    //         .catch(() =>
    //         this.setState({
    //             movies: [],
    //             message: "No New Movies Found, Try a Different Query"
    //         })
    //     );
    // };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getMovies();
    };

    // handleMovieSave = id => {
    //     const movie = this.state.movies.find(movie => movie.id === id);

    //     API.saveMovie({
    //         title: movie.title
    //     }).then(() => this.getMovies());
    // }
    

    render() {
      return (
        <div className="App">
          {/* <Content /> */}
          <Item />
        </div>
      );
    }
}

export default Home;
