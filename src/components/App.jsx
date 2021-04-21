import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../sampleNotes";
import AddNote from "./AddNote"

function App() {

   const [newNote, setNewNote] = useState({
      title: "",
      content: ""
   });

   const [displayNotes, setdisplayNotes] = useState(notes);

   function addNote() {
      setdisplayNotes(prevValues => {
         return (
            [...prevValues, newNote]
         )
      })
   };

   function handleChange(event) {
      const {name, value} = event.target;
      const id = displayNotes.length+1;
      setNewNote(prevValue => ({...prevValue, [name]: value, key: id}))
   }

   function removeNote(removeId) {
      console.log(removeId)
      setdisplayNotes(displayNotes => {
         return displayNotes.filter((item) => {
            return item.key !== removeId
         })
      })
   };

   return (
      <div>
         <Header />
         {displayNotes.map(
            note => 
               <Note 
               key={note.key}
               id={note.key}
               title={note.title}
               content={note.content}
               removeNote={removeNote}
               />
            )}
         <AddNote 
            title={newNote.title}
            text={newNote.text}
            addNote={addNote}
            onChange={handleChange}
         />
         <Footer />
      </div>
   );
};

export default App;