import React from 'react';
import { connect } from 'react-redux';
import * as noteStates from '../constants/NoteStates';

const getVisibleNotes = (notes, visibilityFilter) => {
  return notes.filter(n => n.noteState === visibilityFilter);
}

const Note = ({text, noteState, onClick}) => (
  <li onClick={onClick} className="note">
    <article>
      {text}
    </article>
  </li>
)

const NotesList = ({notes, onNoteClick}) => (
  <ul className="notes-list">
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

const mapDispatchToVisibleNotesListProps = (dispatch) => {
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
