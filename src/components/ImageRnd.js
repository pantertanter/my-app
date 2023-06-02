import React from "react";
import '../Css/ImageRnd.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function ImageRnd() {
var num = Math.floor(Math.random() * 1000);
var num1 = Math.floor(Math.random() * 1000);
var num2 = Math.floor(Math.random() * 1000);

    let source = "https://picsum.photos/id/" + num + "/1500/1000";
    let source1 = "https://picsum.photos/id/" + num1 + "/1500/1000";
    let source2 = "https://picsum.photos/id/" + num2 + "/1500/1000";
  
  return (
        <>
            <div className="Picture-row">
                <div className="Picture-column">
                    <img src={source} alt="random" loading="lazy" className="rounded"/>
                </div>
                <div className="Picture-column">
                    <img src={source1} alt="random" loading="lazy" className="rounded"/>
                </div>
                <div className="Picture-column">
                    <img src={source2} alt="random" loading="lazy" className="rounded"/>
                </div>
            </div>
            </>
      );
    }