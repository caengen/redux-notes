import React from 'react';
import * as actions from '../actions/NoteActions';
import { connect } from 'react-redux';
import { createMarkup } from '../constants/helper';
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

const Editor = ({notePreview, onAddClick, onTextChange}) => {
  let input;

  return (
    <section className="editor">
      <textarea
        ref={node => {
          input = node;
        }}
        onChange={onTextChange}
      />
      <button onClick={() => {
          if (!input) return;
          onAddClick(input.value)
        }}>
        {'Save'}
      </button>
      <Preview text={notePreview}/>
    </section>
  )
}

const Preview = ({text}) => (
  <div className="preview">
    <section dangerouslySetInnerHTML={createMarkup(text)}></section>
  </div>
)

const mapStateToSelectedNoteEditor = (state) => {
  return {
    notePreview: state.notePreview
  }
}

const mapDispatchToSelectedNoteEditor = (dispatch) => {
  return {
    onTextChange: (e) => {
      dispatch(actions.updateNotePreview(e.target.value));
    },
    onAddClick: (text) => {
      if (!text) return;
      dispatch(actions.addNote(text))
    }
  }
}

export const SelectedNoteEditor = connect(
  mapStateToSelectedNoteEditor,
  mapDispatchToSelectedNoteEditor
)(Editor);
