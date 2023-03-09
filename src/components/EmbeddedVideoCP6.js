import React from 'react';
import '../App.css';
import GreyBackground from '../assets/images/Products/Grey_Background.png'
import Peace from '../assets/videos/pexels-kevin-malik-9035713.mp4'


const EmbeddedVideoCP6 = () => {

    return (
        <div className="Picture-row">
            <div className="Picture-column">
            <img src={GreyBackground} alt="Suave background" />         
            </div>
            <div className="Picture-column">
            <img src={GreyBackground} alt="Suave background" />
            </div>
            <div className="Picture-column">
            <video src={Peace} muted autoplay="true" />    
            </div>
        </div>
    );
}

export default EmbeddedVideoCP6