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
        style={{borderRadius:"10px",marginLeft:"10px",color:"black",background:"white", border:"2px solid transparent"}}
      ></input>
      <button onClick={handleAddNote} style={{borderRadius:"10px", marginLeft:"0px", color:"#042699",background:"white", border:"2px solid transparent"}}>+</button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note} <button onClick={() => handleDeleteNote(index)} style={{borderRadius:"10px", marginLeft:"10px",marginTop:"5px", color:"#042699",background:"white", border:"2px solid transparent"}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;

