import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-links">
                <div className="footer-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer-links_container">
                    <p><a href="#about">About</a></p>
                    <p><a href="#utility">NFT Utility</a></p>
                    <p><a href="#dynasty">Meta Dynasty</a></p>
                    <p><a href="#tokenomics">Tokenomics</a></p>
                    <p><a href="#authenticate">Authenticate</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer