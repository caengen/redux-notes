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
      dispatch(actions.appendNotePreview(getMarkup(markupType)))
    }
  }
}

export const AwesomeBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonBar);

const getMarkup = (type) => {
  switch (type) {
    case 'strong':
      return '\n**strong**'
    case 'emphasis':
      return '\n__emphasized__'
    case 'link':
      return '\n[Link](https://www.google.com "Google\'s Homepage")'
    case 'quote':
      return '\n>quote'
    case 'code':
      return '```\nconst square = x => x * x;\n```';
    case 'image':
      return '\n>![alt text](https://path/name.png "Title here")'
    case 'web':
      return '\n<p>html</p>';
    case 'numbered':
      return '\n1. List item';
    case 'list':
      return '\n- List item';
    case 'heading':
      return '\n##Heading##'
    case 'hr':
      return '\n----------'
    default:
      return '';
  }
}
