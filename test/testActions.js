import expect from 'expect';
import deepFreeze from 'deep-freeze';
import * as actions from '../src/actions/NoteActions';
import * as types from '../src/constants/ActionTypes';
import * as noteStates from '../src/constants/NoteStates';

describe('actions', () => {
  afterEach(() => {
    actions.resetId();
  });

  it('should create an action to add a note', () => {
    const id = 1;
    const noteState = noteStates.NOTE_CREATED;
    const text = '***Tests**** ----- *Test 1'
    const expectedAction = {
      type: types.ADD_NOTE,
      id,
      noteState,
      text
    };
    expect(actions.addNote(text)).toEqual(expectedAction);
  });

  it('should create an action to add a draft', () => {
    const id = 1;
    const noteState = noteStates.NOTE_DRAFTED;
    const text = '***Tests**** ----- *Test 1'
    const expectedAction = {
      type: types.ADD_DRAFT,
      id,
      noteState,
      text
    };
    expect(actions.addDraft(text)).toEqual(expectedAction);
  });

  it('should create an action to delete a note', () => {
    const id = 1;
    const expectedAction = {
      type: types.DELETE_NOTE,
      id
    };
    expect(actions.deleteNote(id)).toEqual(expectedAction);
  });

  it('should create an action to update note preview', () => {
    const text = 'the new text';
    const expectedAction = {
      type: types.UPDATE_NOTE_PREVIEW,
      text
    };
    deepFreeze(text);
    expect(actions.updateNotePreview(text)).toEqual(expectedAction);
  });

  it('should create an action to slice note preview', () => {
    const begin = 8;
    const end = 15;
    const newSlice = 'this is the new slice';
    const expectedAction = {
      type: types.SLICE_NOTE_PREVIEW,
      begin,
      end,
      newSlice
    }

    expect(actions.sliceNotePreview(begin, end, newSlice)).toEqual(expectedAction);
  })

  it('should create an action to change a notes state', () => {
    const expectedAction = {
      type: types.TRANSFER_NOTE,
      newState: types.DELETE_NOTE,
      id: 1
    };
    expect(actions.transferNote(1, types.DELETE_NOTE)).toEqual(expectedAction);
  });
});
