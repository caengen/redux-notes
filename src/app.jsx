import React from 'react';
import DOM from 'react-dom';
import { notes, selectedNote, notePreview } from './reducers/notes';
import { visibilityFilter } from './reducers/visibilityFilter';
import { draggables } from './reducers/draggables';
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Notes } from './containers/Notes.jsx';
import { NoteEditor } from './containers/NoteEditor.jsx';
import * as actions from './actions/NoteActions';

const NotesApp = () => (
  <div className="app">
    <Notes />
    <NoteEditor />
  </div>
)
const notesApp = combineReducers({
  notes,
  selectedNote,
  notePreview,
  visibilityFilter,
  draggables
});
const store = createStore(notesApp);
store.dispatch(actions.addNote("Hello world"))

DOM.render(
  <Provider store={store}>
    <NotesApp />
  </Provider>,
  document.getElementById('root')
);
