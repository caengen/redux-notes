import expect from 'expect';
import deepFreeze from 'deep-freeze';
import {notes, notePreview} from '../../src/reducers/notes';
import * as actions from '../../src/actions/NoteActions';
import * as types from '../../src/constants/ActionTypes';
import * as noteStates from '../../src/constants/NoteStates';

describe('note preview reducer', () => {
  it('should return an initial state', () => {
    expect(
      notePreview(undefined, {})
    ).toEqual('')
  });

  it(`should handle UPDATE_NOTE_PREVIEW`, () => {
    const stateBefore = 'this is the old text';
    deepFreeze(stateBefore);
    const stateAfter = 'this is the new text';

    expect(
      notePreview(stateBefore, actions.updateNotePreview(stateAfter))
    ).toEqual(stateAfter);
  });

  it('should handle SLICE_NOTE_PREVIEW', () => {
    const stateBefore = 'this is the old text';
    deepFreeze(stateBefore);
    const stateAfter = 'this is new and improved text';
    const begin = 8;
    const end = 15;
    const newSlice = 'new and improved';

    expect(
      notePreview(stateBefore, actions.sliceNotePreview(begin, end, newSlice))
    ).toEqual(stateAfter);
  });
});
