import React from "react";
import React, { useState } from "react";


export default function ImageRndCntr() {

    var num = Math.floor(Math.random() * 1000);

    let source = "https://picsum.photos/" + num + "/500";
    
    //  <Image src={this.state.bars[activeImageIndex]} />
  
  return (
    <>
        <div className="Picture-row">
            <div className="Picture-column">
                <img src={source} alt="random" loading="lazy" />
                <img src={source} alt="random" loading="lazy" />
            </div>
            <div className="Picture-column">
                <img src={source} alt="random" loading="lazy" />
                <img src={source} alt="random" loading="lazy" />
            </div>
            <div className="Picture-column">
                <img src={source} alt="random" loading="lazy" />
                <img src={source} alt="random" loading="lazy" />
            </div>
        </div>
        </>
  );
}