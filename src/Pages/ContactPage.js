import React from 'react'
import '../Css/ContactPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CatFactComponent from '../components/CatComponent'
import Spacer from '../components/Spacer';
import Fill from '../components/Fill'
import PicsumCarousel from '../components/PicsumCarousel';

export default function ContactPage() {

  return (
    <>
      <header>
        <Navbar />
        <Spacer />
        <CatFactComponent />
        </header>
        <Spacer />
        <Spacer />
        <PicsumCarousel />
        <Spacer />
        <PicsumCarousel />        
        <Spacer />
        <Spacer />
        <PicsumCarousel />        
        <Spacer />
        <Spacer />
        <PicsumCarousel />
        <Footer />
        <Fill />
        </>
  )
}