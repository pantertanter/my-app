import React from "react"
import '../App.css';

export default function AuthenticNotes() {

    let source = "https://play.google.com/store/apps/details?id=dk.komputerkomputer.helloworld";

    return (
        <div className="normal-div">
            <div className="A-row">
                <div className="A-column">
                <br/>
                <br/>
                <br/>
                <br/>
                <p> Here is a notes app that i made for myself,
                        it is called;
                        <a className="a-link" href={source} >
                                        Authentic notes.
                                            </a> 
                                            </p>      
                    </div>
                    <div className="A-column">
                                                <p className="P-picsum"><a className="a-link" href="https://picsum.photos/">picsum  </a></p>
                                                <br/>  
                                                <br/>
                                                <br/>
                                                       
                    </div>
                </div>  
                </div> 
    );
}