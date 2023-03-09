import React from 'react';
import '../App.css';
import GreyBackground from '../assets/images/Products/Grey_Background.png'
import TwoGuys from '../assets/videos/pexels-kampus-production-8465759.mp4'


const EmbeddedVideoCP2 = () => {

    return (
        <div className="Picture-row">
            <div className="Picture-column">
            <video src={TwoGuys} muted autoplay="true" />          
            </div>
            <div className="Picture-column">
            <img src={GreyBackground} alt="Suave background" />
            </div>
            <div className="Picture-column">
            <img src={GreyBackground} alt="Suave background" />
            </div>
        </div>
    );
}

export default EmbeddedVideoCP2