import React from 'react';
import header_pic from '../../assets/2.png';
import './header.css';

const Header = () => {
    return (
        <div id="header" className="header">
            <img src={header_pic} alt="Welcome To Monkey Ninjas" />
        </div>
    )
}

export default Header