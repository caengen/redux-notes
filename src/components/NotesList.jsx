import React from 'react';
import { connect } from 'react-redux';
import * as noteStates from '../constants/NoteStates';
import * as actions from '../actions/NoteActions';

const getVisibleNotes = (notes, visibilityFilter) => {
  return notes.filter(n => n.noteState === visibilityFilter);
}

const Note = ({text, noteState, onClick, onChangeState}) => (
  <div className="note">
    <li onClick={onClick}>
      <article>
        {text}
      </article>
    </li>
    <button onClick={onChangeState}>
      {noteState === noteStates.NOTE_CREATED ? 'Delete' : 'Restore'}
    </button>
  </div>
)

const NotesList = ({notes, onNoteClick, onNoteChangeState}) => {

  return (
    <ul className="notes-list">
      {notes.map(note => {
        const newState = note.noteState === noteStates.NOTE_CREATED ? noteStates.NOTE_DELETED : noteStates.NOTE_CREATED;
        /* spread applies all properties of note e.g. text={note.text} noteState={note.noteState} */
        return <Note
          {...note}
          key={note.id}
          onClick={() => onNoteClick(note.id)}
          onChangeState={() => onNoteChangeState(note.id, newState)}
        />
      })}
    </ul>
  )
}

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
      dispatch(actions.setSelectedNote(id));
    },
    onNoteChangeState: (id, newState) => {
      dispatch(actions.transferNote(id, newState));
    }
  }
}

export const VisibleNotesList = connect(
  mapStateToVisibleNotesListProps,
  mapDispatchToVisibleNotesListProps
)(NotesList);
