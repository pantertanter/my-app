import React from "react";
import ImageRndCntr from "./Functions/RndImgCntr";

export default function ImageRnd() {

    let source = "https://picsum.photos/500";
  
  return (
        <>
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