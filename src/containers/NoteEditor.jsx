import React from 'react';
import * as actions from '../actions/NoteActions';
import { connect } from 'react-redux';
import { createMarkup } from '../constants/Utilities';
import marked from 'marked';
import _ from 'underscore';
import { Editor } from '../components/Editor.jsx';

const mapStateToProps = (state) => {
  return {
    text: state.notePreview
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => {
      dispatch(actions.updateNotePreview(e.target.value));
    },
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
  mapStateToProps,
  mapDispatchToProps
)(Editor);
