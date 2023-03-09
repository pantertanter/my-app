import React from 'react';
import '../App.css';
import GreyBackground from '../assets/images/Products/Grey_Background.png'
import Hall from '../assets/videos/61c6eeaf-87cf5e18.mp4'


const EmbeddedVideoCP4 = () => {

    return (
        <div className="Picture-row">
            <div className="Picture-column">
            <img src={GreyBackground} alt="Suave background" />         
            </div>
            <div className="Picture-column">
            <video src={Hall} muted autoplay="true" />    
            </div>
            <div className="Picture-column">
            <img src={GreyBackground} alt="Suave background" />
            </div>
        </div>
    );
}

export default EmbeddedVideoCP4