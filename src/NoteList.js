
import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="notes-list"  style={ {display : "flex", flexDirection : "row", justifyContent : "center", alignItems : "center" , marginLeft : "20px"}}>
      {notes.map((note) => (
        <Note key={note.id} {...note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NoteList;