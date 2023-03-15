import React from "react"
import '../Css/Picture.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import BottleOpener from '../assets/images/Products/Bottleopenerv1.png'
import VinOplukker from '../assets/images/Products/Vinoplukkerv1.png'
import Curve from '../assets/images/Products/6,2_curve_2022-Sep-14_07-23-08AM-000_CustomizedView13402167234_png.png'
import DropThrough from '../assets/images/Products/4,_2_drop_through_assembly_2022-Sep-23_01-45-16PM-000_CustomizedView25849388260_png.png'
import Bicycle from '../assets/images/Products/Bicycle_assembly_2022-Oct-04_09-41-33AM-000_CustomizedView2984346625_png.png'

export function Picture1() {

    return (
        <div className="Picture-row">
            <div className="Picture-column">
                <img src={Curve} alt="Curve" loading="lazy" className="rounded"/>                
            </div>
            <div className="Picture-column">
                <img src={Bicycle} alt="Bicycle" loading="lazy" className="rounded"/>               
            </div>
            <div className="Picture-column">
                <img src={BottleOpener} alt="Bottleopenerv1" loading="lazy" className="rounded"/>
            </div>
        </div>
    );
}

export function Picture2() {

    return (
        <div className="Picture-row">
            <div className="Picture-column">
                <img src={VinOplukker} alt="VinOplukker" className="rounded"/>
            </div>
            <div className="Picture-column">
                <img src={DropThrough} alt="DropThrough" className="rounded"/>
            </div>
            <div className="Picture-column">
                <img src={Curve} alt="Curve" className="rounded"/>
            </div>
        </div>
    );

}


            
       