import React from "react";
import Note from "./Note";

const NotesList = (props) => {
  const renderNote = (note) => (
    <Note
      note={note}
      key={note.id}
      deleteNote={props.deleteNote}
      updateNote={props.updateNote}
    />
  );
  const filteredNotes = props.notes.filter((note) => {
    return note.matchesSearch;
  });
  const NoteListElements = filteredNotes.map(renderNote);

  return (
    <main>
      <ul className="notes-list">{NoteListElements}</ul>
    </main>
  );
};

export default NotesList;
