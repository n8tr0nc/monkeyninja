import React from 'react';
import about_pic from '../../assets/3.png';
import './about.css';

const About = () => {
    return (
        <div id="about" className="about">
            <img src={about_pic} alt="About Monkey Ninjas" />
        </div>
    )
}

export default About