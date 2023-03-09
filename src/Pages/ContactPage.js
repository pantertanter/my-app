import React from 'react'
import '../CssFolder/ContactPage.css';
import Navbar from '../components/Navbar';
import ContactImg from '../assets/images/Contact/contact-us-graphic.jpg'
import PacPic from '../assets/images/Contact/pacman_PNG66.png'
import Footer from '../components/Footer';
import MailTo from './MailTo';
import ContactUs from '../assets/images/Contact/2489630.jpg'
import CatFacts from './Cat-Facts';
import Picture from '../components/Picture';
import { Picture2 } from '../components/Picture';
import EmbeddedVideoCP2 from '../components/EmbeddedVideoCP2';
import ImageRnd from '../components/ImageRnd';
import EmbeddedVideoCP4 from '../components/EmbeddedVideoCP4';
import EmbeddedVideoCP6 from '../components/EmbeddedVideoCP6';


let source = "https://www.linkedin.com/in/alexander-stub-michelsen-2a6a301a4/"


export default function ContactPage() {

  return (
    <div>
      <header>
        <Navbar />
        <CatFacts />
        </header>
        <EmbeddedVideoCP2 />
        <EmbeddedVideoCP4 />
        <EmbeddedVideoCP6 />
        <Footer />
        </div>
  )
}