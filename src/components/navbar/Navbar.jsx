import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png'
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(flase);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <p><a href="#fivestars">Five Stars</a></p>
                    <p><a href="#services">Services</a></p>
                    <p><a href="#clients">Clients</a></p>
                    <p><a href="#insights">Insights</a></p>
                    <p><a href="#gmb">Google My Business</a></p>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu}
            </div>
        </div>
    )
}

export default Navbar