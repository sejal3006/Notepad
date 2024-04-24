
import React, { useState, useEffect } from 'react';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (text) => {
    const newNote = {
      id: Date.now(),
      text,
    };
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app" >
      <h1 style={{marginLeft : "30px", textAlign : "center"}}>Notes App</h1>
      <AddNoteForm onAdd={handleAddNote} />
      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
};

export default App;