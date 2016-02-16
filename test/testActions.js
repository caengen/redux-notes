import expect from 'expect';
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

  //it('', () => {expect().toEqual()});
});
