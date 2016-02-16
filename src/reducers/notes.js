import * as types from '../constants/ActionTypes';

const note = (state, action) => {
  switch (action.type) {
    case types.ADD_NOTE:
      return {
        id: action.id,
        noteState: action.noteState,
        text: action.text
      }
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
    default:
      return state;
  }
}
