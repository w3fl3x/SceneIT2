import React, { Component } from "react";
import Content from '../components/Content';
import Item from '../components/Item';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Saved extends Component {
    
    
    render() {
      return (
        <div className="App">
          <Content />
          {/* <Item /> */}
        </div>
      );
    }
}

export default Saved;
