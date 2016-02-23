import React from 'react';
import * as actions from '../actions/NoteActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  
}

const mapDispatchToProps = (dispatch) => {

}

const _Draggable = ({children}) => (
  <section className="editor-viewer">
    {children}
  </section>
)
export const Draggable = connect()(_Draggable)
