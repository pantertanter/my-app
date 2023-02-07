import React from "react";

export default function ImageRndCntr() {

    let source = "https://picsum.photos/500";

    function timeout(delay: number) {
        return new Promise( res => setTimeout(res, delay) );
    }
  
  return (
    <>
    {timeout(1000)}
        <div className="Picture-row">
            <div className="Picture-column">
                <img src={source} alt="random" />
                <img src={source} alt="random" />
            </div>
            <div className="Picture-column">
                <img src={source} alt="random" />
                <img src={source} alt="random" />
            </div>
            <div className="Picture-column">
                <img src={source} alt="random" />
                <img src={source} alt="random" />
            </div>
        </div>
        </>
  );
}