import React from 'react';
/* import '../Css/Home.css';
 */import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CatFacts from '../components/Cat-Facts'
import ImageRnd from '../components/ImageRnd'
import Navbar from '../components/Navbar';
import { Picture1, Picture2 } from '../components/Picture';
import { EmbeddedVideo1, EmbeddedVideo2, EmbeddedVideo3 }  from '../components/EmbeddedVideo';
import Footer from '../components/Footer';
import PrivacyPolicy from '../components/PrivacyPolicy';
import { ScrollToTop, ScrollDownTo }  from '../components/Scroll';
import Spacer from '../components/Spacer';

function Home() {
  return (

    //TODO LOOK INTO BOOTSTRAP
    //TODO LOOK INTO BABYLON
      <>
        <Navbar />
        <CatFacts />
        <ScrollDownTo />
        <EmbeddedVideo1 />
        <Picture1 />
        <ImageRnd />
        <EmbeddedVideo2 />
        <Picture2 />
        <ImageRnd />
        <EmbeddedVideo3 />
        <Spacer />
        <PrivacyPolicy />
        <ScrollToTop />
        <Footer />
  </>
  );
}

export default Home;
