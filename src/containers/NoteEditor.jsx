import React from 'react';
import * as actions from '../actions/NoteActions';
import { connect } from 'react-redux';
import { createMarkup } from '../constants/helper';
import marked from 'marked';
import _ from 'underscore';
import { Editor } from '../components/Editor.jsx';

const mapStateToSelectedNoteEditor = (state) => {
  return {
    text: state.notePreview
  }
}

const mapDispatchToSelectedNoteEditor = (dispatch) => {
  return {
    onChange: (e) => {
      dispatch(actions.updateNotePreview(e.target.value));
    },
    onSubmit: (text) => {
      if (!!text) {
        dispatch(actions.addNote(text));
      }
    },
    compile: createMarkup
  }
}

export const NoteEditor = connect(
  mapStateToSelectedNoteEditor,
  mapDispatchToSelectedNoteEditor
)(Editor);
