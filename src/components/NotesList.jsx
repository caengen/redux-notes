import React from 'react';
import { connect } from 'react-redux';
import * as noteStates from '../constants/NoteStates';
import * as actions from '../actions/NoteActions';

const getVisibleNotes = (notes, visibilityFilter) => {
  return notes.filter(n => n.noteState === visibilityFilter);
}

const Note = ({text, noteState, onClick, onDelete}) => (
  <div>
    <li onClick={onClick} className="note">
      <article>
        {text}
      </article>
    </li>
    <button onClick={onDelete}>
      {'Delete note'}
    </button>
  </div>
)

const NotesList = ({notes, onNoteClick, onNoteDelete}) => (
  <ul className="notes-list">
    {notes.map(note =>
      /* spread applies all properties of note e.g. text={note.text} noteState={note.noteState} */
      <Note
        {...note}
        key={note.id}
        onClick={() => onNoteClick(note.id)}
        onDelete={() => onNoteDelete(note.id, noteStates.NOTE_DELETED)}
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
      //dispatch({});
    },
    onNoteDelete: (id, newState) => {
      dispatch(actions.transferNote(id, newState));
    }
  }
}

export const VisibleNotesList = connect(
  mapStateToVisibleNotesListProps,
  mapDispatchToVisibleNotesListProps
)(NotesList);
