import React from 'react';
import '../App.css';
import GreyBackground from '../assets/images/Products/Grey_Background.png'
import Peace from '../assets/videos/pexels-kevin-malik-9035713.mp4'


const EmbeddedVideo5 = () => {

    return (
        <div className="Picture-row">
            <div className="Picture-column">
            <img src={GreyBackground} alt="Suave background" />

            </div>
            <div className="Picture-column">
            <img src={GreyBackground} alt="Suave background" />
            </div>
            <div className="Picture-column">
            <video src={Peace} muted autoplay="true" loop/>         
            </div>
        </div>
    );
}

export default EmbeddedVideo5