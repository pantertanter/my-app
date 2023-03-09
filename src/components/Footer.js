import React from "react"
import './Footer.css';
import GreyBackground from '../assets/images/Products/Grey_Background.png'

let source = "https://www.linkedin.com/in/alexander-stub-michelsen-2a6a301a4/"

export default function Footer() {

    return (

        <div className='ContactInfo'>
          <ul className='ContactInfo-Schema'>
              <li>
              <a href={source}><h5 className="LinkedIn">LinkedIn</h5></a>
              </li>
              <li>
              <h5><a href="mailto:AlexanderStubMichelsen@gmail.com">Send Email</a></h5>
              </li>

          </ul>
        </div>

);

}