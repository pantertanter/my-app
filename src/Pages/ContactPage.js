import React from 'react'
import '../Css/ContactPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CatFacts from '../components/Cat-Facts';
import { EmbeddedVideoCP1, EmbeddedVideoCP2, EmbeddedVideoCP3 }  from '../components/EmbeddedVideo';


export default function ContactPage() {

  return (
    <div>
      <header>
        <Navbar />
        <CatFacts />
        </header>
        <EmbeddedVideoCP1 />
        <EmbeddedVideoCP2 />
{/*         //TODO FIND MORE SUITABLE VIDEO FOR ALL IF POSSIBLE
 */}        <EmbeddedVideoCP3 />
        <Footer />
        </div>
  )
}