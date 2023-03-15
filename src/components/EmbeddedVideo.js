import React from 'react';
import '../Css/EmdVid.css';
import Astronaut from '../assets/videos/pexels-rodnae-productions-8475052.mp4'
import Skate from '../assets/videos/pexels-darina-belonogova-7539262.mp4'
import Peace from '../assets/videos/pexels-kevin-malik-9035713.mp4'
import TwoGuys from '../assets/videos/pexels-kampus-production-8465759.mp4'
import Hall from '../assets/videos/61c6eeaf-87cf5e18.mp4'
import BridgeMeet from '../assets/videos/pexels-ana-benet-8242999.mp4'

function EmbeddedVideo1() {

   return (
        <div className="Picture-row">
            <div className="Picture-column">
            <video src={Astronaut} muted autoplay="true" loop className="rounded"/>  
            </div>
            <div className="Picture-column">
            </div>
            <div className="Picture-column">
            </div>
        </div>
    );
   }

   function EmbeddedVideo2() {

    return (
        <div className="Picture-row">
            <div className="Picture-column">
            </div>
            <div className="Picture-column">
            <video src={Skate} muted autoplay="true" loop className="rounded"/>    
            </div>
            <div className="Picture-column">
            </div>
        </div>
    );
    }

    function EmbeddedVideo3() {

        return (
            <div className="Picture-row">
                <div className="Picture-column">    
                </div>
                <div className="Picture-column">
                </div>
                <div className="Picture-column">
                <video src={Peace} muted autoplay="true" loop className="rounded"/>         
                </div>
            </div>
        );
        }

        function EmbeddedVideoCP1() {

            return (
                <div className="Picture-row">
                    <div className="Picture-column">
                    <video src={TwoGuys} muted autoplay="true" loop className="rounded"/>          
                    </div>
                    <div className="Picture-column">
                    </div>
                    <div className="Picture-column">
                    </div>
                </div>
            );
            }

            function EmbeddedVideoCP2() {

                return (
                    <div className="Picture-row">
                        <div className="Picture-column">
                        </div>
                        <div className="Picture-column">
                        <video src={Hall} muted autoplay="true" loop className="rounded"/>    
                        </div>
                        <div className="Picture-column">
                        </div>
                    </div>
                );
                }

                function EmbeddedVideoCP3() {

                    return (
                        <div className="Picture-row">
                            <div className="Picture-column">
                            </div>
                            <div className="Picture-column">
                            </div>
                            <div className="Picture-column">
                            <video src={BridgeMeet} muted autoplay="true" loop className="rounded"/>    
                            </div>
                        </div>
                    );
                    }

export { EmbeddedVideo1, EmbeddedVideo2, EmbeddedVideo3, 
EmbeddedVideoCP1, EmbeddedVideoCP2, EmbeddedVideoCP3 }