import React from "react"
import '../App.css'
import Scale from '../assets/images/PrivacyPolicy/kisspng-old-fashioned-weighing-scale-weight-metal-libra-5a81af2ee111b6.1798102015184484309219.jpg'
import { useEffect, useState } from "react";
import GreyBackground from '../assets/images/Products/Grey_Background.png'



export default function ScrollUpTop() {

    const [showButton, setShowButton] = useState(false);
      
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
  
    // This function will scroll the window to the top 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };

    return (
        <>
           <div className="Picture-row">
                <div className="Picture-column">
                    <img src={GreyBackground} alt="Page ten of the privacy policy" loading="lazy" />
                </div>
                <div className="Picture-column">
                    <img src={GreyBackground} alt="Page elleven of the privacy policy" loading="lazy" />
                </div>
                <div className="Picture-column">
                {showButton && (
        <button onClick={scrollToTop}>
          <p style={{ fontFamily: 'Rubik' }}>
            back to top
            </p>
        </button>  
      )}
                 </div>
            </div>
            </>
      );
    }