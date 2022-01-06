import React from 'react';
import cta_pic from '../../assets/7.png';
import './cta.css';

const CTA = () => {
    return (
        <div id="cta" className="cta">
            <img src={cta_pic} alt="Play Now" />
        </div>
    )
}

export default CTA