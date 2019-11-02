import React, { Component } from "react";
import Content from "../components/Content";
// import Item from '../components/Item';
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container, Row, Col } from "../components/Grid";

class Saved extends Component {
  state = {
    movies: [],
    isInEditMode: false
  };

  componentDidMount() {
    this.loadUserList();
  }

  loadUserList = () => {
    console.log("Loading movie list...");

    axios.get("/api/movies").then(response =>
      this.setState({
        movies: response.data,
        comment: response.data.comment
      })
    );
  };

  handleSeenFilm = id => {
    axios
      .put("/api/movies/", { seen: true }, { params: { id: id } })
      .then(response => this.loadUserList());

    console.log("Movie marked as seen " + id);
  };

  handleDeleteFilm = id => {
    axios
      .delete("/api/movies/", { params: { id: id } })
      .then(response => this.loadUserList());

    console.log("Movie has been deleted");
  };

  changeEditMode = comment => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
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
            <Col size="md-12" className="movieItem">
              {this.state.movies.map(movies => (
                <Content
                  id={movies.id}
                  name={movies.movie_name}
                  genre={movies.genre}
                  Button1={() => (
                    <i
                      onClick={() => this.handleSeenFilm(movies.id)}
                      className="fas fa-film"
                    ></i>
                  )}
                  Button2={() => (
                    <i
                      onClick={() => this.handleDeleteFilm(movies.id)}
                      className="far fa-trash-alt"
                    ></i>
                  )}
                  comment={movies.comment}
                />
              ))}
            </Col>
          </Row>
        </div>
        <div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/roundicons"
            title="Roundicons"
          >
            Roundicons
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </Container>
    );
  }
}

export default Saved;
