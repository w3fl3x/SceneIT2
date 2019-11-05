import React from "react";
import "./Item.css";
import { Row, Col } from "../Grid";
import axios from "axios";

function Item(props) {
  function handleSaveFilm() {
    let poster =
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" + props.posterPath;
    let str = props.releaseDate;
    let releaseYear = str.substring(0, 4);

    let ranking = Math.round(props.voteAverage);
    console.log(ranking);

    axios.post("/api/movies/", {
      movie_name: props.title,
      year: releaseYear,
      poster: poster,
      summary: props.summary,
      user_ranking: ranking
    });

    
  }

  return (
    
    <Row>
      <Col size="md-4" className="itemCard">
        <div className="card cardResults">
          <img
            className="card-img-top"
            src={
              "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" +
              props.posterPath
            }
            onError={(e)=>{e.target.onerror = null; e.target.src="https://i.ibb.co/TRT0BJK/noposter.png"}}
            alt="movie poster"
          ></img>
          <div className="card-body">
            <h5>{props.title}</h5>
            <p>Rating: {props.voteAverage}/10</p>
            <p>{props.releaseDate}</p>
            <button
              href="#"
              className="btn btn-secondary"
              onClick={handleSaveFilm}
            >
              Add to List
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Item;
