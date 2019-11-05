import React, { Component } from "react";
import "./Content.css";

function Content({ poster, name, ranking, Button1, Button2, summary }) {
  return (
    <div className="row">
      <div className="col-sm-4 text-center">
        <img className="" src={poster} alt="sans" width="200px"></img>
      </div>
      <div className="col-sm-8 text-center">
        <h3 className="card-title">
          {name + " - "} <Button1 /> <Button2 />{" "}
        </h3>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default Content;
