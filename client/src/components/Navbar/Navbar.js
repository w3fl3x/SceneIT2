import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from '../../components/Login';
import './Navbar.css';

class Navbar extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return(
      <nav className='navbar navbar-expand-lg fixed-top'>
        <Link className="name" to="/">
          SceneIT2
        </Link>
        <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-link collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto w-100 justify-content-end link">
            <Link
              onClick={this.toggleNav}
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
              to="/"
              >
              Home
            </Link>
            <Link
              onClick={this.toggleNav}
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
              to="/saved"
              >
              Saved
            </Link>
            <Login />
          </ul>
        </div>
      </nav>
    )
  }
}  

export default Navbar;
