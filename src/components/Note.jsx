import React from "react";

function Note(params) {
   return (
      <div className="note">
         <h1>{params.title}</h1>
         <p>{params.content}</p>
         <button onClick={() => params.removeNote(params.id)}>Delete</button>
      </div>
   );
};

export default Note;