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

export const editNote = (id, text) => {
  return {
    type: types.EDIT_NOTE,
    id,
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

export const setSelectedNote = (id) => {
  return {
    type: types.SET_SELECTED_NOTE,
    id
  }
}

export const updateNotePreview = (text) => {
  return {
    type: types.UPDATE_NOTE_PREVIEW,
    text
  }
}

export const appendNotePreview = (text) => {
  return {
    type: types.APPEND_NOTE_PREVIEW,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}
