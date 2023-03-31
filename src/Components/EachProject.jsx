import React from "react";

function EachProject({image, name}){
    return(
        <div className="projectItem">
            {/* <div style={{backgroundImage: 'url(${image})'}} className="bgImage"/> */}
                <h1>{name}</h1>
                <img src={image} alt={name}/>
            </div>

        
    )
}

export default EachProject