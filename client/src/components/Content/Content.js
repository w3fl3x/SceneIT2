import React, { Component } from "react";
import "./Content.css";

function Content({ id, name, genre, Button1, Button2 }) {
  return (
    <ul>
      <li>
        <h3>{name}</h3>
      </li>
      <li>{genre}</li>
      <li>
        <span>
          <Button1 /> <Button2 />
        </span>
      </li>
    </ul>
  );
}

export default Content;
