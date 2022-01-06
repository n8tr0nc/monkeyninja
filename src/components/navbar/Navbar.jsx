import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
    {/*const [toggleMenu, setToggleMenu] = useState(flase);*/}

    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar-links_container">
                    <p><a href="#about">About</a></p>
                    <p><a href="#utility">NFT Utility</a></p>
                    <p><a href="#dynasty">Meta Dynasty</a></p>
                    <p><a href="#tokenomics">Tokenomics</a></p>
                    {/*<p><a href="#authenticate">Authenticate</a></p>*/}
                </div>
            </div>
            <div className="navbar-sign">
                <button type="button">Authenticate</button>
            </div>
            {/*<div className="navbar-menu">
                {toggleMenu}
        </div>*/}
        </div>
    )
}

export default Navbar