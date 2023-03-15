import React from 'react'
import '../Css/PrivacyPolicy.css';
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
        <>
        <div>
      <header >
        {/* <Navbar /> */}
        </header>
        </div>
            <div className="Picture-row">
                <div className="Picture-column">
                    <img src={PrivacyPolicy1} alt="Page one of the privacy policy" loading="lazy" className='rounded rounded-bottom'/>
                </div>
                <div className="Picture-column">
                    <img src={PrivacyPolicy2} alt="Page two of the privacy policy" loading="lazy" className='rounded rounded-bottom'/>
                </div>
                <div className="Picture-column">
                    <img src={PrivacyPolicy3} alt="Page three of the privacy policy" loading="lazy" className='rounded'/>
                </div>
            </div>

            <div className="Picture-row">
                <div className="Picture-column">
                    <img src={PrivacyPolicy4} alt="Page four of the privacy policy" loading="lazy" className='rounded'/>
                </div>
                <div className="Picture-column">
                    <img src={PrivacyPolicy5} alt="Page five of the privacy policy" loading="lazy" className='rounded'/>
                </div>
                <div className="Picture-column">
                    <img src={PrivacyPolicy6} alt="Page six of the privacy policy" loading="lazy" className='rounded'/>
                </div>
            </div>

            <div className="Picture-row">
                <div className="Picture-column">
                    <img src={PrivacyPolicy7} alt="Page seven of the privacy policy" loading="lazy" className='rounded'/>
                </div>
                <div className="Picture-column">
                    <img src={PrivacyPolicy8} alt="Page eight of the privacy policy" loading="lazy" className='rounded'/>
                </div>
                <div className="Picture-column">
                    <img src={PrivacyPolicy9} alt="Page nine of the privacy policy" loading="lazy" className='rounded'/>
                </div>
            </div>

            <div className="Picture-row">
                <div className="Picture-column">
                    <img src={PrivacyPolicy10} alt="Page seven of the privacy policy" loading="lazy" className='rounded'/>
                </div>
                <div className="Picture-column">
                    <img src={PrivacyPolicy11} alt="Page eight of the privacy policy" loading="lazy" className='rounded'/>
                </div>
                <div className="Picture-column">
                    <img src={PrivacyPolicy12} alt="Page nine of the privacy policy" loading="lazy" className='rounded'/>
                </div>
            </div>
            </>
      );
    }

