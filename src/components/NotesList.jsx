import React from 'react';
import { connect } from 'react-redux';
import * as noteStates from '../constants/NoteStates';
import * as actions from '../actions/NoteActions';
import { createMarkup } from '../constants/helper';
import marked from 'marked';

const getVisibleNotes = (notes, visibilityFilter) => {
  return notes.filter(n => n.noteState === visibilityFilter.filter);
}

const Note = ({markup, noteState, onClick, onChangeState}) => (
  <div className="note">
    <li className="noteItem" onClick={onClick}>
      <article dangerouslySetInnerHTML={markup}>
      </article>
    </li>
    {/* <button onClick={onChangeState}>
      {noteState === noteStates.NOTE_CREATED ? 'Delete' : 'Restore'}
     </button>*/}
  </div>
)

const NotesList = ({notes, isOpen, onNoteClick, onNoteChangeState}) => {
  if (!isOpen || !notes.length) {
    return (<ul className={"notes-list"}></ul>)
  }

  return (
    <ul className={"notes-list open"}>
      {notes.map(note => {
        const newState = note.noteState === noteStates.NOTE_CREATED ? noteStates.NOTE_DELETED : noteStates.NOTE_CREATED;
        /* spread applies all properties of note e.g. text={note.text} noteState={note.noteState} */
        return <Note
          {...note}
          markup={createMarkup(note.text)}
          key={note.id}
          onClick={() => onNoteClick(note.text)}
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
    ),
    isOpen: state.visibilityFilter.isOpen
  };
};

const mapDispatchToVisibleNotesListProps = (dispatch) => {
  return {
    onNoteClick: (text) => {
      dispatch(actions.updateNotePreview(text));
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
