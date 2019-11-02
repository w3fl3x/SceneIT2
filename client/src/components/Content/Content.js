import React, { Component } from "react";
import "./Content.css";

function Content({ name, genre, Button1, Button2, comment }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-4 text-center">
            <img
              className=""
              src="//placehold.it/200"
              alt="sans"
              width="200px"
            ></img>
          </div>
          <div className="col-sm-8 text-center">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{"Genre: " + genre}</p>
            <div>
              <span className="starRating">
                <input
                  id="rating10"
                  type="radio"
                  name="rating"
                  value="10"
                ></input>
                <label for="rating10">10</label>
                <input
                  id="rating9"
                  type="radio"
                  name="rating"
                  value="9"
                ></input>
                <label for="rating9">9</label>
                <input
                  id="rating8"
                  type="radio"
                  name="rating"
                  value="8"
                ></input>
                <label for="rating8">8</label>
                <input
                  id="rating7"
                  type="radio"
                  name="rating"
                  value="7"
                ></input>
                <label for="rating7">7</label>
                <input
                  id="rating6"
                  type="radio"
                  name="rating"
                  value="6"
                ></input>
                <label for="rating6">6</label>
                <input
                  id="rating5"
                  type="radio"
                  name="rating"
                  value="5"
                ></input>
                <label for="rating5">5</label>
                <input
                  id="rating4"
                  type="radio"
                  name="rating"
                  value="4"
                ></input>
                <label for="rating4">4</label>
                <input
                  id="rating3"
                  type="radio"
                  name="rating"
                  value="3"
                ></input>
                <label for="rating3">3</label>
                <input
                  id="rating2"
                  type="radio"
                  name="rating"
                  value="2"
                ></input>
                <label for="rating2">2</label>
                <input
                  id="rating1"
                  type="radio"
                  name="rating"
                  value="1"
                ></input>
                <label for="rating1">1</label>
              </span>
            </div>
            <br />
            <p>{comment}</p>
            <span>
              <Button1 /> <Button2 />
            </span>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
