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
import Spacer from '../components/Spacer';
import Fill from '../components/Fill'
import LoginForm from '../components/LoginForm.js';

function Home() {
  return (

    //TODO LOOK INTO BOOTSTRAP
    //TODO LOOK INTO BABYLON
      <>
        <Navbar />
        <Spacer />
        <CatFacts />
        {/* <Spacer />
        <LoginForm /> */}
        <Spacer />
        {/* <EmbeddedVideo1 /> */}
        <Spacer />
        <Picture1 />
        <Spacer />
        <ImageRnd />
        <Spacer />
        {/* <EmbeddedVideo2 /> */}
        <Spacer />
        <Picture2 />
        <Spacer />
        <ImageRnd />
        <Spacer />
        {/* <EmbeddedVideo3 /> */}
        <Spacer />
        <Footer />
        <Fill />
  </>
  );
}

export default Home;
