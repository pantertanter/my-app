import React from "react"
import '../App.css'
import Scale from '../assets/images/PrivacyPolicy/kisspng-old-fashioned-weighing-scale-weight-metal-libra-5a81af2ee111b6.1798102015184484309219.jpg'



export default function ScrollTo() {
    return (
        <div className="App">
            <div className="Scales">
          <button onClick={()=> window.scrollTo(0, 5100)}><p>To privacy policy</p></button> 
          <img src={Scale} alt="Image of a scale(Symbolizing the law)" loading="lazy" />     
            {/* <div className="spacer">
                <h1>&nbsp;wsadsd</h1>
            </div> */}
           </div>
          </div>
    )
}