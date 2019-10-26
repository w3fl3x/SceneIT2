import React from 'react';
import './Item.css';

function Item() {
    return (

        <div className="card">
            <img
            className="card-img-top"
            src="https://www.sunnxt.com/images/placeholders/placeholder_vertical.gif"
            alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">Movie Title</h5>
                <p className="card-text">This is the movie description. What a great movie.</p>
                <button
                href="#"
                className="btn btn-secondary">Add to List</button>
            </div>
        </div>

    );
}


export default Item;
