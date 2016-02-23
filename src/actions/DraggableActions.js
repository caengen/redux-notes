import * as types from '../constants/ActionTypes';
import * as noteStates from '../constants/NoteStates';

let dragId = 1;
export const resetId = () => {
  setId(1);
}
export const setId = (id) => {
  noteId = id;
}

export const addDraggable(dragX, dragY) {
  return {
    type: types.ADD_DRAGGABLE,
    id: dragId++,
    dragX,
    dragY
  }
}

export const translateDraggable(id, translateX, translateY) {
  return {
    type: types.TRANSLATE_DRAGGABLE,
    id,
    translateX,
    translateY
  }
}
