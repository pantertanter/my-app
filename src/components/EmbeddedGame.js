import React from "react";

//TODO MAKE ROW W. NO COLUMNS FOR WIDTH TO SPAND FULLY

export default function EmbeddedGame() {

    return (
        <div className="Picture-row">
            <div className="Picture-column">
            <iframe src="http://www.freeonlinegames.com/embed/149448" width="800" height="600" frameborder="no" scrolling="no"></iframe>            
            </div>
        </div>
    );
}