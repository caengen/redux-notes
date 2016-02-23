import * as types from '../constants/ActionTypes';

const draggable = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_DRAGGABLE:
      return {
        id: action.id,
        isMoving: false,
        dragX: action.dragX,
        dragY: action.dragY,
        xOffset: 0,
        yOffset: 0
      }
    case types.TRANSLATE_DRAGGABLE:
      return state;
    default:
      return state;
  }
}

const draggables = (state = [], action) => {
  switch (action.type) {
    case types.ADD_DRAGGABLE:
      return [
        ...state,
        draggable(undefined, action)
      ];
    case types.TRANSLATE_DRAGGABLE:
      return [
        ...state,
        draggable(state, action)
      ]
    default:
      return state;
  }
}
