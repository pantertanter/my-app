import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CatFactComponent from '../components/CatComponent'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import Fill from '../components/Fill'
import PicsumCarousel from '../components/PicsumCarousel';
import Payment from '../components/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

function Home() {

  const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

  return (

    //TODO LOOK INTO BOOTSTRAP
    //TODO LOOK INTO BABYLON
      <>
        <Navbar />
        <Spacer />
        <CatFactComponent />
        <Spacer />
        <h1>Try to click the images on the sides</h1>
        <Spacer />
        <PicsumCarousel />
        <Spacer />
        <PicsumCarousel />
        <Spacer />
      <Elements stripe={stripePromise}>
        <Payment />
      </Elements>
        <Spacer />
        <PicsumCarousel />
        <Spacer />
        <PicsumCarousel />
        <Spacer />
        <Spacer />
        <Footer />
        <Fill />
  </>
  );
}

export default Home;
