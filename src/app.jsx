import React from 'react';
import DOM from 'react-dom';
import { notes } from './reducers/notes';
import { visibilityFilter } from './reducers/visibilityFilter';
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Notes } from './containers/Notes.jsx';
import { Editor } from './containers/Editor.jsx';
import * as actions from './actions/NoteActions';

const NotesApp = () => (
  <div className="app">
    <Notes />
    <Editor />
  </div>
)
const notesApp = combineReducers({notes, visibilityFilter});
const store = createStore(notesApp);
store.dispatch(actions.addNote("Hello world"))

DOM.render(
  <Provider store={store}>
    <NotesApp />
  </Provider>,
  document.getElementById('root')
);
