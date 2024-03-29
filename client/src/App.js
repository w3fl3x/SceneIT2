import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Footer from './components/Footer';
import "./App.css";

require("dotenv").config();

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Navbar />
          <Header />
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
