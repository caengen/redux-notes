import expect from 'expect';
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
});
