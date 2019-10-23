import React, { Component } from "react";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Search from './components/Search';
import Content from './components/Content';
import Item from './components/Item';
import Footer from './components/Footer';
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Search />
        {/* <Content /> */}
        {/* <Item /> */}
        <div className="App-header">
        <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          This is where to put the movie information.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
