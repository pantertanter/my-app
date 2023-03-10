import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

let source = "https://play.google.com/store/apps/details?id=dk.komputerkomputer.helloworld";

function Navbar() {
    return (
        <div className='navbar'>
        <ul className='navbar-menu'>
            <br></br>
            <li><Link to="/"><p>Home</p></Link></li>
            <li><a href={source}><p>Authentic notes on google play</p></a></li>
           {/*  <li><Link to="/PrivacyPolicy"><p>Authentic notes privacy Policy</p></Link></li> */}
            {/* //TODO Make Links work from outside */}
            {/* <li><button onClick={()=> window.scrollTo(0, 3400)}><p>To privacy policy</p></button></li>  */}
            <li><Link to="/contactPage"><p>Contact</p></Link></li>
{/*             <li><button onClick={()=> window.scrollTo(0, 3500)}><p>To privacy policy</p></button></li> 
 */}        </ul>
        <div className='navbar-logo'>
            <img src={ require('../assets/images/Logo/Logo.jpg') } alt="Logo for Alexander Stub Michelsen" />
        </div>
        </div>
    )
}

export default Navbar