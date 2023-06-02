import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CatFacts from '../components/Cat-Facts'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import Fill from '../components/Fill'
import RandomImageRow from '../components/RandomImageRow';

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
        <RandomImageRow />
        <Spacer />
        <RandomImageRow />
        <Spacer />
        <Spacer />
        <RandomImageRow />
        <Spacer />
        <RandomImageRow />
        <Spacer />
        <Spacer />
        <Footer />
        <Fill />
  </>
  );
}

export default Home;
