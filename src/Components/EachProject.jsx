import React from "react";

function EachProject({image, name, url}){
    function GoToURL(){
        window.location.href=url
    }
    return(
        <div className="projectItem" onClick={GoToURL}>
            {/* <div style={{backgroundImage: 'url(${image})'}} className="bgImage"/> */}
                <h1>{name}</h1>
                <img src={image} alt={name}/>
            </div>

        
    )
}

export default EachProject