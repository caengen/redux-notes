import React from 'react';
import * as actions from '../actions/NoteActions';
import { connect } from 'react-redux';

export const _Draggable = ({children}) => (
  <section className="editor-viewer">
    {children}
  </section>
)
export const Draggable = connect()(_Draggable)
