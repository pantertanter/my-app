import React from "react"
import '../Css/Footer.css';

//TODO MAKE ROWS AND COLUMNS AND INDENT PROPERLY

let source = "https://www.linkedin.com/in/alexander-stub-michelsen-2a6a301a4/"

export default function Footer() {

    return (
        <>
        
          <ul className="text">
              <li className="text">
              <a className="text" href={source}><h5>Linked in</h5></a>
              </li>
              <li className="text">
              <h5><a className="text" href="mailto:AlexanderStubMichelsen@gmail.com">Send email</a></h5>
              </li>
          </ul>
        
</>
);

}