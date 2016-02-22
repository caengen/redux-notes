import React from 'react';
import * as actions from '../actions/NoteActions';
import { connect } from 'react-redux';
import { AwesomeBar } from '../containers/AwesomeBar.jsx';
import { CompiledPreview } from './CompiledPreview.jsx';
import { Draggable } from '../containers/Draggable.jsx';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const _Grippie = () => (
  <div className="grippie"></div>
)

export const Grippie = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Grippie);

export const Editor = ({text, onSubmit, onChange, compile}) => (
  <section className="editor">
    <Draggable>
      <AwesomeBar />
      <textarea id="editorTextarea" value={text} onChange={onChange} />
    </Draggable>
    <Grippie />
    <section className="editor-submit">
      <button onClick={() => onSubmit(text)}>
        {'Save'}
      </button>
    </section>
    <CompiledPreview text={text} compile={compile}/>
  </section>
)
