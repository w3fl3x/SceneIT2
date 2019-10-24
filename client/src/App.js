import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Search from './components/Search';
import Content from './components/Content';
import Item from './components/Item';
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Footer from './components/Footer';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Header />
          <Search />
          {/* <Content /> */}
          {/* <Item /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Saved" component={Saved} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
