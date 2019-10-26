import React, { Component } from "react";
import Content from '../components/Content';
// import Item from '../components/Item';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


class Saved extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.loadUserList();
  }

  loadUserList = () => {
    console.log('Loading movie list...');

    axios({
      url: "/api/movies",
      method: "GET",
    }).then(response => {
      this.setState({ books: response.data })
      console.log(response.data);
    })

  };

  render() {
    return (
      <div className="App">
        <Content>
          {this.state.books.map(movie => {
            return (
              <movieItem
                id={movie.id}
                movieName={movie.movie_name}
                genre={movie.genre}
                year={movie.year}
                userRanking={movie.user_ranking}
                comment={movie.comment}
              />
            )
          })
          }
        </Content>
        {/* <Item /> */}
      </div>
    );
  }
}

export default Saved;
