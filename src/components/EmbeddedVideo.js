import React from 'react';
import '../App.css';
import GreyBackground from '../assets/images/Products/Grey_Background.png'
import Lamb from '../assets/videos/lamb-120739.mp4'


const EmbeddedVideo = () => {

    return (
        <div className="Picture-row">
            <div className="Picture-column">
            <img src={GreyBackground} alt="Suave background" />         
            </div>
            <div className="Picture-column">
            <video src={Lamb} autoplay muted controls="controls" autoplay="true" />    
            </div>
            <div className="Picture-column">
            <img src={GreyBackground} alt="Suave background" />
            </div>
        </div>
    );
}

export default EmbeddedVideo