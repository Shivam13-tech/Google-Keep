import React, { useState } from "react";


function Note(props){                 //Note function that recieves props through map and then load different note cards

    function handleClick(event){
       props.fnc(props.id)
        event.preventDefault()
    }
      
    return (
        <div className="note">
           <h1>{props.header}</h1>
           <p>{props.parah}</p>
           <button onClick={handleClick}>DELETE</button>
        </div>
    )
}


export default Note;