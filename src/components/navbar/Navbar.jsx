import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Menu = () => (
    <>
    <p><a href="#about">About</a></p>
    <p><a href="#utility">NFT Utility</a></p>
    <p><a href="#dynasty">Meta Dynasty</a></p>
    <p><a href="#tokenomics">Tokenomics</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links_logo">
                    <a href="#top"><img src={logo} alt="logo" /></a>
                </div>
                <div className="navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="navbar-sign">
                <button type="button">Authenticate</button>
            </div>
            <div className="navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={40} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={40} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="navbar-menu_container scale-up-center">
                        <div className="navbar-menu_container-links">
                            <Menu />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar