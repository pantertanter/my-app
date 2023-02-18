import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

let source = "https://play.google.com/store/apps/details?id=dk.komputerkomputer.helloworld";

function Navbar() {
    return (
        <div className='navbar'>
        <ul className='navbar-menu'>
            <li><Link to="/">Home</Link></li>
            <li><a href={source}>Authentic notes on google play</a></li>
            <li><Link to="/PrivacyPolicy">Privacy Policy for Authentic notes</Link></li>
            <li><Link to="/contactPage">Contact</Link></li>
        </ul>
        <div className='navbar-logo'>
            <img src={ require('../assets/images/Logo/Logo.jpg') } alt="Logo for Alexander Stub Michelsen" />
            </div>
        </div>
    )
}

export default Navbar