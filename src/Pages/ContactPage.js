import React from 'react'
import '../Css/ContactPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CatFacts from '../components/Cat-Facts';
// import { EmbeddedVideoCP1, EmbeddedVideoCP2, EmbeddedVideoCP3 }  from '../components/EmbeddedVideo';
import Spacer from '../components/Spacer';
import Fill from '../components/Fill'


export default function ContactPage() {

  return (
    <>
      <header>
        <Navbar />
        <Spacer />
        <CatFacts />
        </header>
        <Spacer />
        {/* <EmbeddedVideoCP1 /> */}
        <Spacer />
        {/* <EmbeddedVideoCP2 /> */}
        <Spacer />
{/*         //TODO FIND MORE SUITABLE VIDEO FOR ALL IF POSSIBLE */}  
        {/* <EmbeddedVideoCP3 /> */}
        <Spacer />
        <Footer />
        <Fill />
        </>
  )
}