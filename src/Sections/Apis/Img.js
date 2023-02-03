import React from "react";

export default function Api() {
  
  return (
    <>
    <h1>Random Images</h1>
        <div className="Picture-row">
            <div className="Picture-column">
                <img src="https://picsum.photos/500" alt="random" />
                <img src="https://picsum.photos/500" alt="random" />
            </div>
            <div className="Picture-column">
                <img src="https://picsum.photos/500" alt="random" />
                <img src="https://picsum.photos/500" alt="random" />
            </div>
            <div className="Picture-column">
                <img src="https://picsum.photos/500" alt="random" />
                <img src="https://picsum.photos/500" alt="random" />
            </div>
        </div>
        </>
  );
}