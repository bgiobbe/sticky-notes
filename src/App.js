import React, { Component } from "react";
import Header from "./Header";
import NotesList from "./NotesList";
import "./styles.css";

class App extends Component {
  state = {
    searchText: "",
    /* note: id, title, description, matchesSearch */
    notes: [
      /* default: a blank note */
      {
        id: Date.now(),
        title: "",
        description: "",
        matchesSearch: true
      }
    ]
  };

  /* Add a new note
   * Side effect:
   *    clears searchText so the new note is guaranteed to be rendered
   */
  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      matchesSearch: true
    };
    const notes = [...this.state.notes, newNote];
    this.setState({ notes: notes, searchText: "" });
  };

  // delete the note with the given ID
  deleteNote = (id) => {
    const notes = this.state.notes.filter((note) => {
      return note.id !== id;
    });
    this.setState({ notes: notes });
  };

  // change the title of a note
  updateNote = (id, field, newValue) => {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        if (field === "title") {
          note.title = newValue;
        } else if (field === "description") {
          note.description = newValue;
        } else {
          console.warn("App.updateNote()", "invalid field");
        }
      }
      return note;
    });
    this.setState({ notes: notes });
  };

  onSearch = (event) => {
    const searchText = event.target.value.toLowerCase();
    const notes = this.state.notes.map((note) => {
      note.matchesSearch =
        note.title.toLowerCase().includes(searchText) ||
        note.description.toLowerCase().includes(searchText);
      return note;
    });
    this.setState({ searchText: searchText, notes: notes });
  };

  render() {
    return (
      <div className="App">
        <Header
          searchText={this.state.searchText}
          onSearch={this.onSearch}
          addNote={this.addNote}
        />
        <NotesList
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          updateNote={this.updateNote}
        />
      </div>
    );
  }

  componentDidMount() {
    const notesString = localStorage.getItem("notesString");
    if (notesString) {
      const notes = JSON.parse(notesString);
      this.setState({ searchText: "", notes: notes });
    }
  }

  componentDidUpdate() {
    const notesString = JSON.stringify(this.state.notes);
    localStorage.setItem("notesString", notesString);
  }
}

export default App;
