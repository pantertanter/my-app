import React from 'react';
/* import '../Css/Home.css';
 */import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CatFacts from '../components/Cat-Facts'
import ImageRnd from '../components/ImageRnd'
import Navbar from '../components/Navbar';
import { Picture1, Picture2 } from '../components/Picture';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import Fill from '../components/Fill'

function Home() {
  return (

    //TODO LOOK INTO BOOTSTRAP
    //TODO LOOK INTO BABYLON
      <>
        <Navbar />
        <Spacer />
        <CatFacts />
        <Spacer />
        <Spacer />
        <Picture1 />
        <Spacer />
        <ImageRnd />
        <Spacer />
        <Spacer />
        <Picture2 />
        <Spacer />
        <ImageRnd />
        <Spacer />
        <Spacer />
        <Footer />
        <Fill />
  </>
  );
}

export default Home;
