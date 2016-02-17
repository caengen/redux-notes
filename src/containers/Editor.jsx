import React from 'react';
import * as actions from '../actions/NoteActions';
import { connect } from 'react-redux';

const _Editor = ({dispatch}) => {
  let input;

  return (
    <section className="editor">
      <textarea
        rows="5"
        cols="50"
        ref={node => {
          input = node;
        }}/>
      <button onClick={() => {
          dispatch(actions.addNote(input.value))
        }}>
        {'Add new note'}
      </button>
    </section>
  )
}
export const Editor = connect()(_Editor);
