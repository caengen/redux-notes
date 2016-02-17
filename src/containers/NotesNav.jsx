import React from 'react';
import { connect } from 'react-redux';
import { FilterLink } from '../components/Link.jsx';
import * as noteStates from '../constants/NoteStates';

export const NotesNav = () => (
  <div className="notes-nav">
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
