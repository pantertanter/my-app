import React from 'react'
import '../Css/ContactPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CatFactComponent from '../components/CatComponent'
import Spacer from '../components/Spacer';
import Fill from '../components/Fill'
import RandomImageRow from '../components/RandomImageRow';

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
        <RandomImageRow />
        <Spacer />
        <RandomImageRow />
        <Spacer />
        <Spacer />
        <RandomImageRow />
        <Spacer />
        <Spacer />
        <Footer />
        <Fill />
        </>
  )
}