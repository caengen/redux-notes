import * as types from '../constants/ActionTypes';

const note = (state, action) => {
  switch (action.type) {
    case types.ADD_NOTE:
      return {
        id: action.id,
        noteState: action.noteState,
        text: action.text
      }
    case types.TRANSFER_NOTE:
      return {
        ...state[action.id-1],
        noteState: action.newState
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
    case types.TRANSFER_NOTE:
      return [
        ...state.slice(0, action.id-1),
        note(state, action),
        ...state.slice(action.id)
      ]
    default:
      return state;
  }
}
