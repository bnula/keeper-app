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

   const [displayNotes, setDisplayNotes] = useState(notes);

   function addNote() {
      setDisplayNotes(prevValues => {
         return (
            [...prevValues, newNote]
         );
      });
      setNewNote({
         title: "",
         content: ""
      });
   };

   function handleChange(event) {
      const {name, value} = event.target;
      const id = displayNotes.length+1;
      setNewNote(prevValue => ({...prevValue, [name]: value, key: id}))
   }

   function removeNote(removeId) {
      setDisplayNotes(displayNotes => {
         return displayNotes.filter((item) => {
            return item.key !== removeId
         })
      });
   };

   return (
      <div>
         <Header />
         <AddNote 
            title={newNote.title}
            content={newNote.content}
            addNote={addNote}
            onChange={handleChange}
         />
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
         <Footer />
      </div>
   );
};

export default App;