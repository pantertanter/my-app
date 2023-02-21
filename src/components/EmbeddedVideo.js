import React from 'react';
import '../App.css';
import GreyBackground from '../assets/images/Products/Grey_Background.png'


const EmbeddedVideo = () => {

    return (
        <div className="Picture-row">
            <div className="Picture-column">
            <img src={GreyBackground} alt="Suave background" />         
            </div>
            <div className="Picture-column">
            <iframe width="1000" height="900" src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1" frameborder="0" allowfullscreen></iframe>    
            </div>
            <div className="Picture-column">
            <img src={GreyBackground} alt="Suave background" />
            </div>
        </div>
    );
}

export default EmbeddedVideo