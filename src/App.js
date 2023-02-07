import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivacyPolicy from './Sections/PrivacyPolicy';
import Picture from './Sections/Picture';
import CatFacts from './Sections/Apis/Cat-Facts'
import ImageRnd from './Sections/Apis/ImageRnd'
import AuthenticNotes from './Sections/Authentic notes';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <CatFacts />
        <AuthenticNotes />
        <ImageRnd />
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
