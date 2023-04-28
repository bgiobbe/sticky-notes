import React from "react";
import NewNoteButton from "./NewNoteButton.js";
import Searchbox from "./Searchbox.js";

const Header = (props) => {
  return (
    <header>
      <h1>Super Sticky Notes</h1>
      <div className="controls">
        <NewNoteButton addNote={props.addNote} />
        <Searchbox searchText={props.searchText} onSearch={props.onSearch} />
      </div>
    </header>
  );
};

export default Header;
