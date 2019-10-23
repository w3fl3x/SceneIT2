import React from 'react';
import './Item.css';

function Item(props) {
    return (

        <div className="card">
            <img src ="http://catalog.osaarchivum.org/assets/thumbnail_placeholder_movie-480596e192e7043677f77cf78b13bdd1.jpg"></img>
            <p><strong>Movie Title Here</strong></p>
            <p>This is a description of the movie. It is a great movie.</p>
             <i className="fas fa-film"></i>
             <i className="far fa-trash-alt"></i>
        </div>

        
            );
          }
          
          
export default Item;