import React from 'react';
import DOM from 'react-dom';
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { notes } from './reducers/notes';
import { visibilityFilter} from './reducers/visibilityFilter';
import * as noteActions from './actions/NoteActions';
import * as noteStates from './constants/NoteStates';
import * as types from './constants/ActionTypes';
import { VisibleNotesList } from './containers/NotesList.jsx';
import { Editor } from './containers/Editor.jsx';

const NotesApp = () => (
  <div>
    <Editor />
    <VisibleNotesList />
    <p>{'hello world'}</p>
  </div>
)
const notesApp = combineReducers({notes, visibilityFilter});

DOM.render(
  <Provider store={createStore(notesApp)}>
    <NotesApp />
  </Provider>,
  document.getElementById('root')
);
