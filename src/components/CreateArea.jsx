import React, { useState } from "react";



function CreateArea(props){                                                       //Everytime we use prevValue anywhere with our setState we refer to the old value ie initial or if its been modified 

    const [details, setdetails] = useState({
        title: "",
        content: ""
    })
 
    function handleChange(event){                                                //On handle change we get values of the entered data and its name
        const value = event.target.value;
        const name = event.target.name
        setdetails(prevValue => {                                               // Here we set state get its previousValue ie for now title="" & content=""
            if(name === "title"){
             return{                                                           //And we check if the name if it matches title then only title is updated and same for content
                title: value,
                content: prevValue.content
            }   
            }else if(name === "content"){
              return{
                title: prevValue.title,
                content: value
              }  
            }
        })
        
    }

    function handleClick(event){                                      //Now to add data to card we need to send it back to parent that is app.jsx
        props.fnc(details)                                           //From parent we recieve a prop fnc and pass our state change as argument
        event.preventDefault()                                      //we make sure the page doesnt reload after every add
        setdetails({                                               //Also make the the area clean by changing it back to og state
            title: "",
            content: ""
        })
    }

    return(
        <div>
        <form>
            <input onChange={handleChange} value={details.title} name="title" placeholder="Title" />
            <textarea onChange={handleChange}  value={details.content} name="content" placeholder="Take a note..." rows="3"/>
            <button onClick={handleClick}>Add</button>
      </form>
        </div>
    )
}

export default CreateArea;