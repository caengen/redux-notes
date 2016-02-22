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
  let slice;
  switch (type) {
    case 'strong':
      slice = newSliceOrDefault('**', '**', 'strong');
      return actions.sliceNotePreview(slice.start, slice.end, slice.slice);
    case 'emphasis':
      slice = newSliceOrDefault('__', '__', 'emphasized');
      return actions.sliceNotePreview(slice.start, slice.end, slice.slice);
    case 'link':
      return actions.appendNotePreview('\n[Link](https://www.google.com "Google\'s Homepage")');
    case 'quote':
      slice = newSliceOrDefault('>', '', 'quote');
      return actions.sliceNotePreview(slice.start, slice.end, slice.slice);
    case 'code':
      slice = newSliceOrDefault('```', '```', 'code');
      return actions.sliceNotePreview(slice.start, slice.end, slice.slice);
    case 'image':
      return actions.appendNotePreview('\n>![alt text](https://path/name.png "Title here")')
    case 'web':
      return actions.appendNotePreview('\n<p>html</p>')
    case 'numbered':
      slice = newSliceOrDefault('1. ', '', 'List item');
      return actions.sliceNotePreview(slice.start, slice.end, slice.slice);
    case 'list':
      slice = newSliceOrDefault('- ', '', 'List item');
      return actions.sliceNotePreview(slice.start, slice.end, slice.slice);
    case 'heading':
      slice = newSliceOrDefault('##', '##', 'Header');
      return actions.sliceNotePreview(slice.start, slice.end, slice.slice);
    case 'hr':
      return actions.appendNotePreview('\n\n----------')
    default:
      return '';
  }
}
