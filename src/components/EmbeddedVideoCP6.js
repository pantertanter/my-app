import React from 'react';
import '../App.css';
import GreyBackground from '../assets/images/Products/Grey_Background.png'
import Mix from '../assets/videos/production ID_4443536.mp4'


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
            <video src={Mix} muted autoplay="true" />    
            </div>
        </div>
    );
}

export default EmbeddedVideoCP6