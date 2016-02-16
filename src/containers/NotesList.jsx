import React from 'react';
import { connect } from 'react-redux';
import * as noteStates from '../constants/NoteStates';

const getVisibleNotes = (notes, visibilityFilter) => {
  return notes;//.filter(n => n.noteState === visibilityFilter)
}

const Note = ({text, noteState, onClick}) => (
  <li onClick={onClick}>
    {text}
  </li>
)

const NotesList = ({notes, onNoteClick}) => (
  <ul>
    {notes.map(note =>
      /* spread applies all properties of note e.g. text={note.text} noteState={note.noteState} */
      <Note
        {...note}
        key={note.id}
        onClick={() => onNoteClick(note.id)}
      />
    )}
  </ul>
)

const mapStateToVisibleNotesListProps = (state) => {
  return {
    notes: getVisibleNotes(
      state.notes,
      state.visibilityFilter
    )
  };
};

const mapDispatchToVisibleNotesListProps = (state) => {
  return {
    onNoteClick: (id) => {
      dispatch({});
    }
  }
}

export const VisibleNotesList = connect(
  mapStateToVisibleNotesListProps,
  mapDispatchToVisibleNotesListProps
)(NotesList);
