import React, { useState } from 'react';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h3>Notes</h3>
      <input type="text"
        value={newNote}
        onChange={handleNoteChange}
        placeholder="Add a new note..."
        rows="4"
        cols="50"
      ></input>
      <button onClick={handleAddNote}>Add Note</button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note} <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;

