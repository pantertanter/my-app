import React from 'react';
import '../App.css';
import GreyBackground from '../assets/images/Products/Grey_Background.png'
import Skate from '../assets/videos/pexels-darina-belonogova-7539262.mp4'


const EmbeddedVideo3 = () => {

    return (
        <div className="Picture-row">
            <div className="Picture-column">
            <img src={GreyBackground} alt="Suave background" />         
            </div>
            <div className="Picture-column">
            <video src={Skate} muted autoplay="true" />    
            </div>
            <div className="Picture-column">
            <img src={GreyBackground} alt="Suave background" />
            </div>
        </div>
    );
}

export default EmbeddedVideo3