import React from 'react';
import { connect } from 'react-redux';
import * as noteStates from '../constants/NoteStates';
import * as actions from '../actions/NoteActions';
import { createMarkup, getVisibleNotes } from '../constants/Utilities';
import marked from 'marked';

const Note = ({markup, noteState, onClick, onSave, onDelete, onRestore}) => (
  <div className="note">
    <li className="noteItem" onClick={onClick}>
      <article dangerouslySetInnerHTML={markup}>
      </article>
    </li>
    <div className="action-group">
      <i className="material-icons" title={'Save'} onClick={onSave}>save</i>
      <i className="material-icons" title={'Delete'} onClick={onDelete}>delete</i>
      <i className="material-icons" title={'Restore'} onClick={onRestore}>restore</i>
    </div>
  </div>
)

const NotesList = ({notes, isOpen, onNoteClick, onNoteChangeState}) => {
  if (!isOpen || !notes.length) {
    return (<ul className={"notes-list"}></ul>)
  }

  return (
    <ul className={"notes-list open"}>
      {notes.map(note => {
        /* spread applies all properties of note e.g. text={note.text} noteState={note.noteState} */
        return <Note
          {...note}
          markup={createMarkup(note.text)}
          key={note.id}
          onClick={() => onNoteClick(note.text)}
          onSave={() => onNoteChangeState(note.id, noteStates.NOTE_CREATED)}
          onDelete={() => onNoteChangeState(note.id, noteStates.NOTE_DELETED)}
          onRestore={() => onNoteChangeState(note.id, noteStates.NOTE_DRAFTED)}
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
