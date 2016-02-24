import * as types from '../constants/ActionTypes';

/*export const visibilityFilter = (state = 'NOTE_CREATED', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}*/

const initialState = {
  filter: 'NOTE_CREATED',
  isOpen: true
};
export const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return {
        filter: action.filter,
        isOpen: true
      };
    case types.TOGGLE_VISIBILITY_FILTER:
      return {
          ...state,
          isOpen: !state.isOpen
      };
    default:
      return state;
  }
}
