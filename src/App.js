import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PrivacyPolicy from './Sections/PrivacyPolicy';
import Picture from './Sections/Picture';
import CatFacts from './Sections/Apis/Cat-Facts'
import Img from './Sections/Apis/Img'


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Img />
        <CatFacts />
        <Picture />
        <PrivacyPolicy />
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
