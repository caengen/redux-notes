import React from 'react';
import * as actions from '../actions/NoteActions';
import { AwesomeBar } from '../containers/AwesomeBar.jsx';
import { CompiledPreview } from './CompiledPreview.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const _Grippie = ({text, onChange}) => (
  <div className="grippie"></div>
)

export const Grippie = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Grippie);

export const Editor = ({text, onSubmit, onChange, compile}) => (
  <section className="editor">
    <section className="editor-viewer">
      <AwesomeBar />
      <textarea id="editorTextarea" value={text} onChange={onChange} />
    </section>
    <Grippie />
    <section className="editor-submit">
      <button onClick={() => onSubmit(text)}>
        {'Save'}
      </button>
    </section>
    <CompiledPreview text={text} compile={compile}/>
  </section>
)
