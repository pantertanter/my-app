import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Picture from './Sections/Picture';
import CatFacts from './Sections/Apis/Cat-Facts'
import ImageRnd from './Sections/Apis/ImageRnd'
import Navbar from './components/Navbar';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Navbar />
        <CatFacts />
        <ImageRnd />
        <Picture />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
