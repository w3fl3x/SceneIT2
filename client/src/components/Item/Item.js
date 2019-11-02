import React from "react";
import "./Item.css";
import { Container, Row, Col } from "../Grid";

function Item(props) {
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
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5>{props.title}</h5>
            <p>Rating: {props.voteAverage}/10</p>
            <p>{props.releaseDate}</p>
            <button href="#" className="btn btn-secondary">
              Add to List
            </button>
          </div>
        </div>
      </Col>
    </Row>

  );
}

export default Item;
