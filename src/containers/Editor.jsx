import React from 'react';
import * as actions from '../actions/NoteActions';
import { connect } from 'react-redux';
import marked from 'marked';
import _ from 'underscore';

const getSelectedNote = (notes, selectedNote) => {
  const note = _.findWhere(notes, {id: selectedNote});

  return {
    ...note,
    id: (!note) ? 0 : note.id,
    text: (!note) ? '' : note.text
  }
}

const Editor = ({id, text, onAddClick}) => {
  let input;

  return (
    <section className="editor">
      <textarea
        value={text}

        ref={node => {
          input = node;
        }}/>
      <button onClick={onAddClick(id, input)}>
        {'Add/Edit note'}
      </button>
    </section>
  )
}

const mapStateToSelectedNoteEditor = (state) => {
  const note = getSelectedNote(state.notes, state.selectedNote);
  return {
    id: note.id,
    text: note.text
  }
}

const mapDispatchToSelectedNoteEditor = (dispatch) => {
  return {
    onAddClick: (id, input) => {
      if (!input) return;

      if (!id) {
        dispatch(actions.addNote(input.value))
      }
      else {
        dispatch(actions.editNote(id, input.value))
      }
    }
  }
}

export const SelectedNoteEditor = connect(
  mapStateToSelectedNoteEditor,
  mapDispatchToSelectedNoteEditor
)(Editor);
