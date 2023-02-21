import React from "react";

export default function ImageRnd() {
var num = Math.floor(Math.random() * 1000);

    let source = "https://picsum.photos/id/" + num + "/1500/1000";
  
  return (
        <>
            <div className="Picture-row">
                <div className="Picture-column">
                    <img src={source} alt="random" loading="lazy"/>
                </div>
                <div className="Picture-column">
                    <img src={source} alt="random" loading="lazy"/>
                </div>
                <div className="Picture-column">
                    <img src={source} alt="random" loading="lazy"/>
                </div>
            </div>
            </>
      );
    }