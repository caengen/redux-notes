import React from 'react';
import {connect} from 'react-redux';
import {NotesNav} from './NotesNav.jsx';
import {getVisibleNotes} from '../constants/Utilities'
import {VisibleNotesList} from '../components/NotesList.jsx';

export const _Notes = ({isOpen, isEmpty}) => {
  return (
    <div className={(isOpen && !isEmpty) ? 'notes' : 'notes closed'}>
      <NotesNav />
      <VisibleNotesList />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    isOpen: state.visibilityFilter.isOpen,
    isEmpty: getVisibleNotes(state.notes, state.visibilityFilter).length === 0
  }
}

export const Notes = connect(
  mapStateToProps,
  undefined
)(_Notes);
