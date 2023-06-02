import React from "react"
import '../Css/Footer.css';

//TODO MAKE ROWS AND COLUMNS AND INDENT PROPERLY

let source = "https://www.linkedin.com/in/alexander-stub-michelsen-2a6a301a4/"

export default function Footer() {

    return (
        <>
        
          <ul>
              <li>
              <a href={source}><h5>Linked in</h5></a>
              </li>
              <li>
              <h5><a href="mailto:AlexanderStubMichelsen@gmail.com">Send email</a></h5>
              </li>
          </ul>
        
</>
);

}