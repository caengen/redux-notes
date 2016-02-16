import React from 'react';
import * as actions from '../actions/NoteActions';
import { connect } from 'react-redux';

const _Editor = ({dispatch}) => (
  <button onClick={() => {
      dispatch(actions.addNote('New note here!'))
    }}>
    {'Add new note'}
  </button>
)
export const Editor = connect()(_Editor);
