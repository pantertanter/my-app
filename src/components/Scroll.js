import React from "react"
import '../Css/Scroll.css'
import { useEffect, useState } from "react";

export function ScrollDownTo() {
    return (
        <>
            <div className="Scales">
          <button onClick={()=> window.scrollTo(0, 5450)}><p>To privacy policy for Authentic notes App</p></button> 
          </div>
          </>
    )
}

export function ScrollToTop() {

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
              </div>
              <div className="Picture-column">
              </div>
              <div className="Picture-column">
              {showButton && (
      <button onClick={scrollToTop}>
        <p>
          back to the top of the homepage
          </p>
      </button>  
    )}
               </div>
          </div>
          </>
    );
  }