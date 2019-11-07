import React from "react";
import "./Content.css";

function Content({ poster, name, Button1, Button2, summary, seen }) {
  let flagged = "";

  if (seen) {
    flagged =
      "Now that you've seen this movie, click on the stars to add your custom rating below!";
  } else {
    flagged = "";
  }

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
        <div>
          <h4>{flagged}</h4>
        </div>
      </div>
    </div>
  );
}

export default Content;
