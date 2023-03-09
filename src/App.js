import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Picture from './components/Picture';
import CatFacts from './Pages/Cat-Facts'
import ImageRnd from './components/ImageRnd'
import Navbar from './components/Navbar';
import { Picture2 } from './components/Picture';
import EmbeddedGame from './components/EmbeddedGame';
import EmbeddedVideo from './components/EmbeddedVideo';
import Footer from './components/Footer';
import PrivacyPolicy from './Pages/PrivacyPolicyPage';
import ScrollTo from './components/ScrollTo';
import EmbeddedVideo3 from './components/EmbeddedVideo3';
import EmbeddedVideo5 from './components/EmbeddedVideo5';
import Spacer from './components/Spacer';

function App() {
  return (

    <div className="App">
      
        <Navbar />
        <CatFacts />
        <ScrollTo />
        <EmbeddedVideo />
        <ImageRnd />
        <Picture />
        <EmbeddedVideo3 />
        <ImageRnd />
        <Picture2 />
        <EmbeddedVideo5 />
        <Spacer />
        <PrivacyPolicy />
        <Footer />
      
    </div>
  );
}

export default App;
