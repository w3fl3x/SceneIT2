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
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
