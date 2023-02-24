import React from "react"
import '../App.css';
import GreyBackground from '../assets/images/Products/Grey_Background.png'

let source = "https://www.linkedin.com/in/alexander-stub-michelsen-2a6a301a4/"

export default function Footer() {

    return (

        <div className='ContactInfo'>
          <ul className='ContactInfo-Schema'>
              <li>
              <h5>Alexander Stub Michelsen</h5>
              </li>
              <li>
              <h5>Mathilde Parken 23, 2. MF.</h5>
              </li>
              <li>
              <h5>3400 Hillerød, DK</h5>
              </li>
              <li>
              <h5>004528919844</h5>
              </li>
              <li>
              <a href={source}><h5 className="LinkedIn">LinkedIn</h5></a>
              </li>
              <li>
              <h5>AlexanderStubMichelsen@gmail.com &nbsp;:&nbsp;  <a href="mailto:AlexanderStubMichelsen@gmail.com">Send Email</a></h5>
              </li>

          </ul>
        </div>

);

}