import React from 'react';
import '../App.css';
import GreyBackground from '../assets/images/Products/Grey_Background.png'
import Astronaut from '../assets/videos/pexels-rodnae-productions-8475052.mp4'


const EmbeddedVideo = () => {
    var num = Math.floor(Math.random() * 1000);
    var num1 = Math.floor(Math.random() * 1000);
    var num2 = Math.floor(Math.random() * 1000);

    let source = "https://picsum.photos/id/" + num + "/500/1000";
    let source1 = "https://picsum.photos/id/" + num1 + "/1500/1000";
    let source2 = "https://picsum.photos/id/" + num2 + "/1500/1000";
  
  

    return (
        <div className="Picture-row">
            <div className="Picture-column">
            <video src={Astronaut} muted autoplay="true" />  
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

export default EmbeddedVideo