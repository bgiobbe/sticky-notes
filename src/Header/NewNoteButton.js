import React from "react";

const NewNoteButton = (props) => {
  const onClick = () => props.addNote();
  return <button onClick={onClick}>+ New Note</button>;
};

export default NewNoteButton;
