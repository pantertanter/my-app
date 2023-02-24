import React from 'react'
import '../CssFolder/ContactPage.css';
import Navbar from '../components/Navbar';
import ContactImg from '../assets/images/Contact/contact-us-graphic.jpg'
import PacPic from '../assets/images/Contact/pacman_PNG66.png'
import Footer from '../components/Footer';
import MailTo from './MailTo';
import ContactUs from '../assets/images/Contact/2489630.jpg'

let source = "https://www.linkedin.com/in/alexander-stub-michelsen-2a6a301a4/"


export default function ContactPage() {

  return (
    <div>
      <header>
        <Navbar />
        </header>
        <div className='ContactInfo'>
          <div className='ContactInfo-Schema'>
          <img src={ContactUs} alt="ContactImg" loading=" lazy" /> 
          {/* <img src={ContactUs} alt="ContactImg" loading=" lazy" />  */}
          {/* <img src={PacPic} alt="ContactImg" loading=" lazy" />           */}      
        </div>
        </div>
        <Footer />
        </div>
  )
}