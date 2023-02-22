import React from 'react'
import '../CssFolder/ContactPage.css';
import Navbar from '../components/Navbar';
import ContactImg from '../assets/images/Contact/contact-us-graphic.jpg'
import PacPic from '../assets/images/Contact/pacman_PNG66.png'
import Footer from '../components/Footer';

let source = "https://www.linkedin.com/in/alexander-stub-michelsen-2a6a301a4/"


export default function ContactPage() {
  return (

    <div>
      <header>
        <Navbar />
        </header>
        <div className='ContactInfo'>
          <ul className='ContactInfo-Schema'>
              <li>
              <h4>Alexander Stub Michelsen</h4>
              </li>
              <li>
              <h4>Mathilde Parken 23, 2. MF.</h4>
              </li>
              <li>
              <h4>3400 Hillerød, DK</h4>
              </li>
              <li>
              <h4>AlexanderStubMichelsen@gmail.com</h4>
              </li>
              <li>
              <h4>004528919844</h4>
              </li>
              <li>
              <a href={source}><p>LinkedIn</p></a>
              </li>

          </ul>
          <img src={ContactImg} alt="ContactImg" loading=" lazy" /> 
          <img src={PacPic} alt="ContactImg" loading=" lazy" />                
        </div>
        <Footer />
        </div>
  )
}