import React from "react";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function Note(params) {
   return (
      <div className="note">
         <h1>{params.title}</h1>
         <p>{params.content}</p>
         <button onClick={() => params.removeNote(params.id)}>
            <HighlightOffIcon
               fontSize="large"
               cursor="pointer"
            />
         </button>
      </div>
   );
};

export default Note;