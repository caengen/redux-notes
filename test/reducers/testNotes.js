import expect from 'expect';
import deepFreeze from 'deep-freeze';
import {notes} from '../../src/reducers/notes';
import * as actions from '../../src/actions/NoteActions';
import * as types from '../../src/constants/ActionTypes';
import * as noteStates from '../../src/constants/NoteStates';

describe('notes reducer', () => {
  afterEach(() => {
    actions.resetId();
  });

  it('should return an initial state', () => {
    expect(
      notes(undefined, {})
    ).toEqual([])
  });

  it('should handle ADD_NOTE', () => {
    const stateAfter = [
      {
        id: 1,
        noteState: noteStates.NOTE_CREATED,
        text: 'new note'
      }
    ];
    expect(
      notes([], actions.addNote('new note'))
    ).toEqual(stateAfter);
  });

  it('should handle TRANSFER_NOTE', () => {
    const stateBefore = [
      {id:1,noteState:noteStates.NOTE_CREATED,text:'first'},
      {id:2,noteState:noteStates.NOTE_CREATED,text:'second'},
      {id:3,noteState:noteStates.NOTE_CREATED,text:'third'}
    ];
    const stateAfter = [
      {id:1,noteState:noteStates.NOTE_CREATED,text:'first'},
      {id:2,noteState:noteStates.NOTE_DELETED,text:'second'},
      {id:3,noteState:noteStates.NOTE_CREATED,text:'third'}
    ];
    deepFreeze(stateBefore);

    expect(
      notes(stateBefore, actions.transferNote(2, noteStates.NOTE_DELETED))
    ).toEqual(stateAfter);
  });
});
