import React, { Component } from "react";
// import { Link } from "react-router-dom";
import './Login.css';

class Login extends Component {

  render() {
    return(
        <>
            <div className="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Log In
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <div className="fb-login-button" data-width="" data-size="small" data-button-type="login_with" data-auto-logout-link="true" data-use-continue-as="true"></div>
                </div>
            </div>
        </>
    )
  }
}

export default Login;