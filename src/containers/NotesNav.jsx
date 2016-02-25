import React from 'react';
import {connect} from 'react-redux';
import { FilterLink } from './FilterLink.jsx';
import * as noteStates from '../constants/NoteStates';
import { createMarkup, getVisibleNotes } from '../constants/Utilities';

export const NumberDisplay = ({children}) => (
  <div className="number-display">
    {children}
  </div>
)

export const _NotesNav = ({notesCount}) => (
  <div className="notes-nav">
    <NumberDisplay>{notesCount}</NumberDisplay>
    <FilterLink filter={noteStates.NOTE_CREATED}>
      Notes
    </FilterLink>
    <FilterLink filter={noteStates.NOTE_DRAFTED}>
      Drafts
    </FilterLink>
    <FilterLink filter={noteStates.NOTE_DELETED}>
      Bin
    </FilterLink>
  </div>
)

const mapStateToProps = (state) => {
  return {
    notesCount: getVisibleNotes(state.notes, state.visibilityFilter).length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export const NotesNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(_NotesNav);
