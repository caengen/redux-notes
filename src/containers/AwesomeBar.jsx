import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/NoteActions';
import { ButtonBar } from '../components/ButtonBar.jsx'

const mapStateToProps = (state) => {
  return {
    text: state.notePreview
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (markupType) => {
      dispatch(getAction(markupType));
    }
  }
}

export const AwesomeBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonBar);

const getSelection = (node) => {
  if (window.getSelection) {
    try {
        var ta = document.getElementById('editorTextarea');
        return {
          start: ta.selectionStart,
          end: ta.selectionEnd,
          slice: ta.value.substring(ta.selectionStart, ta.selectionEnd)
        }
    } catch (e) { }
  }
}

const newSliceOrDefault = (before, after, defaultVal) => {
  const selection = getSelection('editorTextarea');
  return {
    ...selection,
    slice: before +
    ((!selection.slice.length) ? defaultVal : selection.slice) +
    after
  }
}

const getAction = (type) => {
  switch (type) {
    case 'strong':
      const slice = newSliceOrDefault('**', '**', 'strong');
      return actions.sliceNotePreview(slice.start, slice.end, slice.slice);
    case 'emphasis':
      return actions.appendNotePreview('\n__emphasized__');
    case 'link':
      return actions.appendNotePreview('\n[Link](https://www.google.com "Google\'s Homepage")');
    case 'quote':
      return actions.appendNotePreview('\n>quote');
    case 'code':
      return actions.appendNotePreview('```\nconst square = x => x * x;\n```')
    case 'image':
      return actions.appendNotePreview('\n>![alt text](https://path/name.png "Title here")')
    case 'web':
      return actions.appendNotePreview('\n<p>html</p>')
    case 'numbered':
      return actions.appendNotePreview('\n1. List item')
    case 'list':
      return actions.appendNotePreview('\n- List item')
    case 'heading':
      return actions.appendNotePreview('\n##Heading##')
    case 'hr':
      return actions.appendNotePreview('\n----------')
    default:
      return '';
  }
}
