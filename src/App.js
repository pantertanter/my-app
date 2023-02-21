import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Picture from './components/Picture';
import CatFacts from './Pages/FrontPage/Cat-Facts'
import ImageRnd from './components/ImageRnd'
import Navbar from './components/Navbar';
import { Picture2 } from './components/Picture';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Navbar />
        <CatFacts />
        <ImageRnd />
        <Picture />
        <ImageRnd />
        <Picture2 />
        <ImageRnd />
      </header>
    </div>
  );
}

export default App;
