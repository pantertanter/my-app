import React from "react";

export default function ImageRnd() {

    let source = "https://picsum.photos/1500/1000";
  
  return (
        <>
            <div className="Picture-row">
                <div className="Picture-column">
                    <img src={source} alt="random" loading="lazy"/>
                    <img src={source} alt="random" loading="lazy"/>
                </div>
                <div className="Picture-column">
                    <img src={source} alt="random" loading="lazy"/>
                    <img src={source} alt="random" loading="lazy"/>
                </div>
                <div className="Picture-column">
                    <img src={source} alt="random" loading="lazy"/>
                    <img src={source} alt="random" loading="lazy"/>
                </div>
            </div>
            </>
      );
    }