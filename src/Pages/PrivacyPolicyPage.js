import React from 'react'
import Navbar from '../components/Navbar';
import '../App.css';
import GreyBackground from '../assets/images/Products/Grey_Background.png'
import { useEffect, useState } from "react";




import PrivacyPolicy1 from '../assets/images/PrivacyPolicy/1.jpg'
import PrivacyPolicy2 from '../assets/images/PrivacyPolicy/2.jpg'
import PrivacyPolicy3 from '../assets/images/PrivacyPolicy/3.jpg'
import PrivacyPolicy4 from '../assets/images/PrivacyPolicy/4.jpg'
import PrivacyPolicy5 from '../assets/images/PrivacyPolicy/5.jpg'
import PrivacyPolicy6 from '../assets/images/PrivacyPolicy/6.jpg'
import PrivacyPolicy7 from '../assets/images/PrivacyPolicy/7.jpg'
import PrivacyPolicy8 from '../assets/images/PrivacyPolicy/8.jpg'
import PrivacyPolicy9 from '../assets/images/PrivacyPolicy/9.jpg'
import PrivacyPolicy10 from '../assets/images/PrivacyPolicy/10.jpg'
import PrivacyPolicy11 from '../assets/images/PrivacyPolicy/11.jpg'
import PrivacyPolicy12 from '../assets/images/PrivacyPolicy/12.jpg'
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
    
        // The back-to-top button is hidden at the beginning
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
        <div>
      <header >
        {/* <Navbar /> */}
        </header>
        </div>
            <div className="Picture-row">
                <div className="Picture-column">
                    <img src={PrivacyPolicy1} alt="Page one of the privacy policy" loading="lazy" />
                </div>
                <div className="Picture-column">
                    <img src={PrivacyPolicy2} alt="Page two of the privacy policy" loading="lazy" />
                </div>
                <div className="Picture-column">
                    <img className='Picture-img' src={PrivacyPolicy3} alt="Page three of the privacy policy" loading="lazy" />
                </div>
            </div>

            <div className="Picture-row">
                <div className="Picture-column">
                    <img src={PrivacyPolicy4} alt="Page four of the privacy policy" loading="lazy" />
                </div>
                <div className="Picture-column">
                    <img src={PrivacyPolicy5} alt="Page five of the privacy policy" loading="lazy" />
                </div>
                <div className="Picture-column">
                    <img src={PrivacyPolicy6} alt="Page six of the privacy policy" loading="lazy" />
                </div>
            </div>

            <div className="Picture-row">
                <div className="Picture-column">
                    <img src={PrivacyPolicy7} alt="Page seven of the privacy policy" loading="lazy" />
                </div>
                <div className="Picture-column">
                    <img src={PrivacyPolicy8} alt="Page eight of the privacy policy" loading="lazy" />
                </div>
                <div className="Picture-column">
                    <img src={PrivacyPolicy9} alt="Page nine of the privacy policy" loading="lazy" />
                </div>
            </div>

            <div className="Picture-row">
                <div className="Picture-column">
                    <img src={PrivacyPolicy10} alt="Page ten of the privacy policy" loading="lazy" />
                </div>
                <div className="Picture-column">
                    <img src={PrivacyPolicy11} alt="Page elleven of the privacy policy" loading="lazy" />
                </div>
                <div className="Picture-column, Return">
                {showButton && (
        <button onClick={scrollToTop}>
          back to top
        </button>
      )}
      {/* &#8679; is used to create the upward arrow */}
                </div>
                {/* <Footer /> */}
            </div>
            </>
      );
    }
    
    /* return (
        <div>
      <header >
        <Navbar />
        </header>
        <div className="Privacy-policy-row">
                <img src={PrivacyPolicy1} alt="Page one of the privacy policy" />
                <img src={PrivacyPolicy2} alt="Page two of the privacy policy" />
            </div> 
            <div className="Privacy-policy-column">
            <div className="Privacy-policy-row">    
                <img src={PrivacyPolicy3} alt="Page three of the privacy policy" />
                <img src={PrivacyPolicy4} alt="Page one of the privacy policy" />
            </div>   
            </div> 
            <div className="Privacy-policy-column">  
            <div className="Privacy-policy-row">    
                <img src={PrivacyPolicy5} alt="Page four of the privacy policy" />
                <img src={PrivacyPolicy6} alt="Page five of the privacy policy" />
            </div> 
            </div> 
            <div className="Privacy-policy-column">
            <div className="Privacy-policy-row">    
                <img src={PrivacyPolicy7} alt="Page six of the privacy policy" />
                <img src={PrivacyPolicy8} alt="Page seven of the privacy policy" />
            </div>
            </div> 
                <div className="Privacy-policy-column">
            <div className="Privacy-policy-row">     
                <img src={PrivacyPolicy9} alt="Page eight of the privacy policy" />
                <img src={PrivacyPolicy10} alt="Page nine of the privacy policy" />
            </div> 
            </div> 
            <div className="Privacy-policy-column">
            <div className="Privacy-policy-row">     
                <img src={PrivacyPolicy11} alt="Page ten of the privacy policy" />
                <img src={PrivacyPolicy12} alt="Page elleven of the privacy policy" />
            </div>  
            </div> 
        </div>
    );
} */

