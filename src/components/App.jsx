import React, { useState } from "react";
import Note from "./Note";
import Header from "./Header";
import CreateArea from "./CreateArea";


function App(){

    const [note, setNote] = useState([]);                        // we need state bcoz the value of array will keep changing after each added note

    function noteData(noteData){                                //We have this function which is bieng passed as props to child
       console.log(noteData)                                   //Once we get all data from child as a argument we push it to our empty array to loop
        setNote(prevNote => {                                 //Here prevNote will be the prev value for the note that is an empty array for now
          return (
            [...prevNote, noteData]                          //Using spread operator so the array is populated with all data instead of doing all push pop etc  
          )  
        })                               
        
    }


    function deleteData(id){
      setNote(prevNote => {
         return prevNote.filter((noteItem, index)=>{        //The filter takes up to 3 argument (1.variable for each item/2. index of each item)
              return index !== id                          //We check if the index we get of each item should not match with the key id we recieve
        })                                                //This will give a new array where the clicked id is not included in our array
      })
    }

    return (
        <div>
            <Header />
            <CreateArea fnc={noteData}/>
            {note.map((eachnote, index) => {          //The map takes up to 3 argument (1.variable for each item/2. index of each item)
                return (
                    <Note key={index} id={index} header={eachnote.title} parah={eachnote.content} fnc={deleteData}/>  
                )
            })}
    
        </div>
    )
}

export default App;



// import notes from "../notes";



// function App(){                                     // Code for passing props through map function(notes array from notes.js)
//         return (
//         <div>
//             <Header />
//             <CreateArea />
//             {notes.map(function (notesInfo){
//                 return (
//                     <Note key = {notesInfo.key} header={notesInfo.title} parah={notesInfo.content}/>
//                 )
//             })}
//         </div>
    
//     )
// }

// export default App;