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
    onSubmit: (text) => {
      if (!!text) {
        dispatch(actions.addNote(text));
        dispatch(actions.updateNotePreview(''));
      }
    },
    compile: createMarkup
  }
}

export const NoteEditor = connect(
  mapStateToSelectedNoteEditor,
  mapDispatchToSelectedNoteEditor
)(Editor);
