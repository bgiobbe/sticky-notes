import React, { Component } from "react";

class Note extends Component {
  // TODO: add change event handlers

  updateTitle = (event) => {
    //console.log("Note.updateTitle()", this.props.note.id, event.target.value);
    this.props.updateNote(this.props.note.id, "title", event.target.value);
  };

  updateDescription = (event) => {
    //console.log("Note.updateDescription()", this.props.note.id, event.target.value);
    this.props.updateNote(
      this.props.note.id,
      "description",
      event.target.value
    );
  };

  render() {
    return (
      <li className="note">
        <input
          type="text"
          className="title"
          placeholder="Title"
          value={this.props.note.title}
          onChange={this.updateTitle}
        />
        <textarea
          className="description"
          placeholder="Description..."
          value={this.props.note.description}
          onChange={this.updateDescription}
        />
        <span
          className="remove"
          onClick={() => this.props.deleteNote(this.props.note.id)}
        >
          X
        </span>
      </li>
    );
  }
}

export default Note;
