import React from "react";

export function Content(props) {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">
                <li>{props.movieName}</li>
            </ul>
        </div>
    )
};

export default Content;