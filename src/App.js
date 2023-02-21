import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Picture from './Sections/Picture';
import CatFacts from './Sections/Apis/Cat-Facts'
import ImageRnd from './Sections/Apis/ImageRnd'
import Navbar from './components/Navbar';
import ImAPictureFileToo  from './Sections/Apis/Functions/I\'mAPictureFileToo.js';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Navbar />
        <CatFacts />
        <ImageRnd />
        <Picture />
        <ImageRnd />
        <ImAPictureFileToo />
      </header>
    </div>
  );
}

export default App;
