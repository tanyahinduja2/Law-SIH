import React,{ useState } from 'react'
export function Box() {
    const [notes, setNotes] = useState([]);
  
    const addNote = (newNote) => {
      setNotes([...notes, newNote]);
    };
  
    const deleteNote = (index) => {
      const updatedNotes = [...notes];
      updatedNotes.splice(index, 1);
      setNotes(updatedNotes);
    };
  }
  export default Box