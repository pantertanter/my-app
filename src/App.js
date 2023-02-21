import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Picture from './components/Picture';
import CatFacts from './Pages/FrontPage/Cat-Facts'
import ImageRnd from './components/ImageRnd'
import Navbar from './components/Navbar';
import { Picture2 } from './components/Picture';
import EmbeddedGame from './components/EmbeddedGame';
import EmbeddedVideo from './components/EmbeddedVideo';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Navbar />
        <CatFacts />
        <ImageRnd />
        <Picture />
        <EmbeddedVideo />
        <ImageRnd />
        <Picture2 />
        <ImageRnd />
      </header>
    </div>
  );
}

export default App;
