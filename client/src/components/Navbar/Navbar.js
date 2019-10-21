import React from 'react';
import './Navbar.css';

const Navbar = (props) => (
    <nav className='navbar'>
        <ul>
            <li className='name'>
                <a href='/'>SceneIT2</a>
            </li>
            
        </ul>
        <ul>
            <li className="login">
                <a href='/login'>Log In</a>
            </li>
            
        </ul>
    </nav>
);

export default Navbar;
