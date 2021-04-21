import React from "react";

function AddNote(params) {
   return (
      <div className="note">
         <input
            placeholder="Title"
            value={params.title}
            name="title"
            onChange={params.onChange}
            />
         <input
            placeholder="Note.."
            value={params.content}
            name="content"
            onChange={params.onChange}
            />
         <button onClick={params.addNote}>Add</button>
      </div>
   )
};

export default AddNote;