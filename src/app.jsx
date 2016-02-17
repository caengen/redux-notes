import React from 'react';
import DOM from 'react-dom';
import { notes } from './reducers/notes';
import { visibilityFilter } from './reducers/visibilityFilter';
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Notes } from './containers/Notes.jsx';
import { Editor } from './containers/Editor.jsx';

const NotesApp = () => (
  <div className="appContainer">
    <Notes />
    <Editor />
  </div>
)
const notesApp = combineReducers({notes, visibilityFilter});

DOM.render(
  <Provider store={createStore(notesApp)}>
    <NotesApp />
  </Provider>,
  document.getElementById('root')
);
