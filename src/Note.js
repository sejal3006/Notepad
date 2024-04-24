
import React from 'react';

const Note = ({ id, text, onDelete }) => {
  return (
    <div className="note" style={{margin : "20px", border : "2px solid green", borderRadius : "5px", backgroundColor : "brown" , color : "white"}}>
      <p>{text}</p>
      <button onClick={() => onDelete(id)} style={{ backgroundColor : "red", color :"pink", border : "none"}}>Delete</button>
    </div>
  );
};

export default Note;