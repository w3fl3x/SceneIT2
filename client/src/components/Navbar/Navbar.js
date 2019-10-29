import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <nav className='navbar navbar-expand-lg collapse .navbar-collapse'>
            <div className='logo'><Link className="name" to="/">
              SceneIT2
            </Link></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-link collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto w-100 justify-content-end links">
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
              </ul>
            </div>
            
            {/* <button
                onClick={this.toggleNav}
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link
                    onClick={this.toggleNav}
                    className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                    to="/"
                    >
                    Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    onClick={this.toggleNav}
                    className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                    to="/saved"
                    >
                    Saved
                    </Link>
                </li>
                </ul>
            </div> */}

          </nav>
        )
    }
}  

export default Navbar;
