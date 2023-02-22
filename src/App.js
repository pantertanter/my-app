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

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Navbar />
        <CatFacts />
        <ImageRnd />
        <EmbeddedVideo />

        <Picture />
        <ImageRnd />
        <Picture2 />
        <ImageRnd />
        <Footer />
      </header>
    </div>
  );
}

export default App;
