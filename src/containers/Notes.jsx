import React from 'react';
import {NotesNav} from './NotesNav.jsx';
import {VisibleNotesList} from '../components/NotesList.jsx';

export const Notes = () => (
  <div className="notesContainer">
    <NotesNav />
    <VisibleNotesList />
  </div>
)
