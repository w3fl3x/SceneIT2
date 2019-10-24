import React, { Component } from "react";
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Search from '../components/Search';
import Content from '../components/Content';
import Item from '../components/Item';
import Footer from '../components/Footer';
import logo from "../logo.svg";
import "../App.css";

class Saved extends Component {
    
    
    render() {
      return (
        <div className="App">
          {/* <Navbar /> */}
          <Header />
          {/* <Search /> */}
          {/* <Content /> */}
          {/* <Item /> */}
          <div className="saveCard">
            <h2>Saved Movies</h2>
          </div>
          {/* <Footer /> */}
        </div>
      );
    }
}

export default Saved;
