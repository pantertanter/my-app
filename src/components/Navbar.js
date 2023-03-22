import React from "react";
import { Link } from "react-router-dom";
import '../Css/Navbar.css';

let source = "https://play.google.com/store/apps/details?id=dk.komputerkomputer.helloworld";

function Navbar() {
    return (
        <div className='navbar'>
        <ul className='navbar-menu'>
            <br></br>
            <li><Link to="/"><p>Home</p></Link></li>
            <li><a href={source}><p>Authentic notes on google play</p></a></li>
          
            <li><Link to="/contactPage"><p>Contact</p></Link></li>
            {/* <li><Link to="/QOD"><p>QOD</p></Link></li> */}
        </ul>
        <div className='navbar-logo'>
            <img src={ require('../assets/images/Logo/logo.png') } alt="Logo for Alexander Stub Michelsen" />
        </div>
        </div>
    )
}

export default Navbar