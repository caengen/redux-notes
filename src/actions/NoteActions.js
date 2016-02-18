import * as types from '../constants/ActionTypes';
import * as noteStates from '../constants/NoteStates';

let noteId = 1;
export const resetId = () => {
  setId(1);
}
export const setId = (id) => {
  noteId = id;
}

export const addNote = (text) => {
  return {
    type: types.ADD_NOTE,
    id: noteId++,
    noteState: noteStates.NOTE_CREATED,
    text
  }
}

export const transferNote = (id, newState) => {
  return {
    type: types.TRANSFER_NOTE,
    id,
    newState
  }
}

export const addDraft = (text) => {
  return {
    type: types.ADD_DRAFT,
    id: noteId++,
    noteState: noteStates.NOTE_DRAFTED,
    text
  }
}
export const deleteNote = (id) => {
  return {
    type: types.DELETE_NOTE,
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}
