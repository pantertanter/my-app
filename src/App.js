import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import BottleOpener from './assets/images/Products/Bottleopenerv1.png'
import VinOplukker from './assets/images/Products/Vinoplukkerv1.png'
import Curve from './assets/images/Products/6,2_curve_2022-Sep-14_07-23-08AM-000_CustomizedView13402167234_png.png'
import DropThrough from './assets/images/Products/4,_2_drop_through_assembly_2022-Sep-23_01-45-16PM-000_CustomizedView25849388260_png.png'
import Bicycle from './assets/images/Products/Bicycle_assembly_2022-Oct-04_09-41-33AM-000_CustomizedView2984346625_png.png'
import Grey_Background from './assets/images/Products/Grey_Background.png'


import PrivacyPolicy1 from './assets/images/PrivacyPolicy/1.jpg'
import PrivacyPolicy2 from './assets/images/PrivacyPolicy/2.jpg'
import PrivacyPolicy3 from './assets/images/PrivacyPolicy/3.jpg'
import PrivacyPolicy4 from './assets/images/PrivacyPolicy/4.jpg'
import PrivacyPolicy5 from './assets/images/PrivacyPolicy/5.jpg'
import PrivacyPolicy6 from './assets/images/PrivacyPolicy/6.jpg'
import PrivacyPolicy7 from './assets/images/PrivacyPolicy/7.jpg'
import PrivacyPolicy8 from './assets/images/PrivacyPolicy/8.jpg'
import PrivacyPolicy9 from './assets/images/PrivacyPolicy/9.jpg'
import PrivacyPolicy10 from './assets/images/PrivacyPolicy/10.jpg'
import PrivacyPolicy11 from './assets/images/PrivacyPolicy/11.jpg'
import PrivacyPolicy12 from './assets/images/PrivacyPolicy/12.jpg'


function App() {
  return (

    

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
        <div className="container">
        {/* <img src={Grey_Background} alt="Grey_Background" className="App-img-grey" /> */}
            <div className="App-column">
            <img src={BottleOpener} alt="Bottleopenerv1" className="App-img" />
            </div>
            <div className="App-column">
            <img src={VinOplukker} alt="VinOplukker" className="App-img" />
            </div>
            <div className="App-column">
            <img src={Curve} alt="Curve" className="App-img" />
            </div>
            <div className="App-row" >
            </div>
            <div className="App-column">
            </div>
            <div className="App-column">
            <img src={Bicycle} alt="Bicycle" className="App-img" />
            </div>
            <div className="App-column, App-img">
            <img src={DropThrough} alt="DropThrough" className="App-img" />
            </div>
            <div className="App-row">
            <img src={Curve} alt="Curve" className="App-img" />
            </div>
            
        </div>
        <div className="Privacy-policy">
        <img src={PrivacyPolicy1} alt="PrivacyPolicy1" />
        <img src={PrivacyPolicy2} alt="PrivacyPolicy2" />
        <img src={PrivacyPolicy3} alt="PrivacyPolicy3" />
        <img src={PrivacyPolicy4} alt="PrivacyPolicy4" />
        <img src={PrivacyPolicy5} alt="PrivacyPolicy5" />
        <img src={PrivacyPolicy6} alt="PrivacyPolicy6" />
        <img src={PrivacyPolicy7} alt="PrivacyPolicy7" />
        <img src={PrivacyPolicy8} alt="PrivacyPolicy8" />
        <img src={PrivacyPolicy9} alt="PrivacyPolicy9" />
        <img src={PrivacyPolicy10} alt="PrivacyPolicy10" />
        <img src={PrivacyPolicy11} alt="PrivacyPolicy11" />
        <img src={PrivacyPolicy12} alt="PrivacyPolicy12" />
        </div>
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
