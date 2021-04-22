import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from '@material-ui/core/Zoom';

function AddNote(params) {
   const [show, setShow] = useState(false);
   console.log(params.title === "")
   console.log(params.content)
   function showNote() {
      setShow(prevValue => !prevValue)
   }

   return (
      <div className="add-note">
         <input
            placeholder="Title"
            className="add-note"
            value={params.title}
            name="title"
            onChange={params.onChange}
            style={{display: !show && "none"}}
            />
         <textarea
            placeholder="Note.."
            className="add-note"
            value={params.content}
            name="content"
            onChange={params.onChange}
            onClick={(params.title === "" && params.content === "") && showNote}
            />
         <Zoom in={show}>
            <Fab onClick={params.addNote}>
               <AddIcon onClick={showNote}/>
            </Fab>
         </Zoom>
      </div>
   )
};

export default AddNote;