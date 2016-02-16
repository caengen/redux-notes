import React from 'react';
import DOM from 'react-dom';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import { notes } from './reducers/notes';
import * as noteActions from './actions/NoteActions';
import * as noteStates from './constants/NoteStates';
import * as types from './constants/ActionTypes';

const NotesApp = () => (
  <div>
    <p>{'hello world'}</p>
  </div>
)

DOM.render(
  <Provider store={createStore(notes)}>
    <NotesApp />
  </Provider>,
  document.getElementById('root')
);
