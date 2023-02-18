import React from "react";

export default function ImageRndCntr() {

    let source = "https://picsum.photos/500";

    /* state = {
        bars:[00,01,02,03,04,05],
        activeImageIndex: 0
     }; */
    
    
    
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