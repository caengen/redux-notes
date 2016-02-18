import React from 'react';
import * as actions from '../actions/NoteActions';
import { connect } from 'react-redux';
import marked from 'marked';

const _Editor = ({dispatch}) => {
  let input;
  let markedInput;

  return (
    <section className="editor">
      <article>
        {markedInput}
      </article>
      <textarea
        ref={node => {
          input = node;
        }}
        onChange={() => {
          markedInput = marked(node.value);
        }}/>
      <button onClick={() => {
          if (input.value)
           dispatch(actions.addNote(input.value))
        }}>
        {'Add new note'}
      </button>
    </section>
  )
}
export const Editor = connect()(_Editor);
