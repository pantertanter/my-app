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

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Navbar />
        <button onClick={()=> window.scrollTo(0, 3500)}><p>To privacy policy</p></button> 
        <CatFacts />
        <ImageRnd />
        <EmbeddedVideo />
        <Picture />
        <ImageRnd />
        <Picture2 />
        <ImageRnd />
        <PrivacyPolicy />
        <Footer />
      </header>
    </div>
  );
}

export default App;
