import * as types from '../constants/ActionTypes';

const note = (state, action) => {
  switch (action.type) {
    case types.ADD_NOTE:
      return {
        id: action.id,
        noteState: action.noteState,
        text: action.text
      };
    case types.TRANSFER_NOTE:
      return {
        ...state[action.id-1],
        noteState: action.newState
      };
    case types.EDIT_NOTE:
      return {
        ...state[action.id-1],
        text: action.text
      };
    default:
      return state;
  }
}

export const notes = (state = [], action) => {
  switch (action.type) {
    case types.ADD_NOTE:
      return [
        ...state,
        note(undefined, action)
      ];
    case types.TRANSFER_NOTE:
      return [
        ...state.slice(0, action.id-1),
        note(state, action),
        ...state.slice(action.id)
      ];
    case types.EDIT_NOTE:
      return [
        ...state.slice(0, action.id-1),
        note(state, action),
        ...state.slice(action.id)
      ];
    default:
      return state;
  }
}

export const selectedNote = (state = 0, action) => {
  switch (action.type) {
    case types.SET_SELECTED_NOTE:
      return action.id;
    default:
      return state;
  }
}

export const notePreview = (state = '', action) => {
  switch (action.type) {
    case types.UPDATE_NOTE_PREVIEW:
      return action.text;
    case types.APPEND_NOTE_PREVIEW:
      return state + action.text;
    case types.SLICE_NOTE_PREVIEW:
      return state.slice(0, action.begin) + action.newSlice + state.slice(action.end);
    default:
      return state;
  }
}
