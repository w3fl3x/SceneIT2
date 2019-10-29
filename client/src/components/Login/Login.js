import React from 'react';
import { ButtonGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => (
    <>
    <div className="fb-login-button _5h0i" data-width="" data-size="small" data-button-type="login_with" data-auto-logout-link="true" data-use-continue-as="true"></div>

    <ButtonGroup>
        <div className="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Log In
            </button>
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a className="dropdown-item" href="#">Dropdown link</a>
            <a className="dropdown-item" href="#">Dropdown link</a>
            </div>
        </div>
    </ButtonGroup>

    </>
);

export default Login;