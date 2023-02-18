import React from 'react'
import '../CssFolder/PrivacyPolicy.css';
import Navbar from '../components/Navbar';


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

export default function PrivacyPolicy() {

    return (
        <div>
      <header >
        <Navbar />
        </header>
        <div className="Privacy-policy-column">
            <div className="Privacy-policy-row">
                <img src={PrivacyPolicy1} alt="PrivacyPolicy1" />
                <img src={PrivacyPolicy2} alt="PrivacyPolicy2" />
            </div>
            </div> 
            <div className="Privacy-policy-column">
            <div className="Privacy-policy-row">    
                <img src={PrivacyPolicy3} alt="PrivacyPolicy3" />
                <img src={PrivacyPolicy4} alt="PrivacyPolicy4" />
            </div>   
            </div> 
            <div className="Privacy-policy-column">  
            <div className="Privacy-policy-row">    
                <img src={PrivacyPolicy5} alt="PrivacyPolicy5" />
                <img src={PrivacyPolicy6} alt="PrivacyPolicy6" />
            </div> 
            </div> 
            <div className="Privacy-policy-column">
            <div className="Privacy-policy-row">    
                <img src={PrivacyPolicy7} alt="PrivacyPolicy7" />
                <img src={PrivacyPolicy8} alt="PrivacyPolicy8" />
            </div>
            </div> 
                <div className="Privacy-policy-column">
            <div className="Privacy-policy-row">     
                <img src={PrivacyPolicy9} alt="PrivacyPolicy9" />
                <img src={PrivacyPolicy10} alt="PrivacyPolicy10" />
            </div> 
            </div> 
            <div className="Privacy-policy-column">
            <div className="Privacy-policy-row">     
                <img src={PrivacyPolicy11} alt="PrivacyPolicy11" />
                <img src={PrivacyPolicy12} alt="PrivacyPolicy12" />
            </div>  
            </div> 
        </div>
    );
}

