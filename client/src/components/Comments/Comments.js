import React, { Component } from "react";

import "./Comments.css";

function Comments({ id }) {
  return (
    <form>
      <label>
        Add/Edit Review:
        <input type="text" name="name"></input>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Comments;
