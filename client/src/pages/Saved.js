import React, { Component } from "react";
<<<<<<< Updated upstream
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Content from '../components/Content';
// import Item from '../components/Item';
import "../App.css";

=======
import Content from "../components/Content";
// import Item from '../components/Item';
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container, Row, Col } from "../components/Grid";
>>>>>>> Stashed changes

class Saved extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.loadUserList();
  }

  loadUserList = () => {
    console.log("Loading movie list...");

    axios
      .get("/api/movies")
      .then(response => this.setState({ movies: response.data }));
  };

  handleSeenFilm = id => {
    axios
      .put("/api/movies/", { seen: true }, { params: { id: id } })
      .then(response => this.loadUserList());

    console.log("Movie marked as seen");
  };

  handleDeleteFilm = id => {
    axios
      .delete("/api/movies/", { params: { id: id } })
      .then(response => this.loadUserList());

    console.log("Movie has been deleted");
  };

  render() {
    return (
      <Container>
        <div className="App">
          <Row>
            <Col size="md-12" className="topList">
              <h2>Top Movies</h2>
            </Col>
          </Row>
          <Row>
            <Col size="md-5" className="movieItem">
              {this.state.movies.map(movies => (
                <Content
                  id={movies.id}
                  name={movies.movie_name}
                  genre={movies.genre}
                  Button1={() => (
                    <button
                      onClick={() => this.handleSeenFilm(movies.id)}
                      className="btn btn-danger ml-2"
                    >
                      Seen
                    </button>
                  )}
                  Button2={() => (
                    <button
                      onClick={() => this.handleDeleteFilm(movies.id)}
                      className="btn btn-danger ml-2"
                    >
                      Delete
                    </button>
                  )}
                />
              ))}
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Saved;
