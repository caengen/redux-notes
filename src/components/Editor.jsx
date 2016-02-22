import React from 'react';
import * as actions from '../actions/NoteActions';
import { AwesomeBar } from '../containers/AwesomeBar.jsx';
import { CompiledPreview } from './CompiledPreview.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    text: state.notePreview
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => {
      dispatch(actions.updateNotePreview(e.target.value));
    }
  }
}

const _GrippieTextarea = ({text, onChange}) => {
  return (
    <div className="grippie-textarea">
      <textarea id="editorTextarea" value={text} onChange={onChange} />
      <div className="grippie"></div>
    </div>
  )
}

export const GrippieTextarea = connect(
  mapStateToProps,
  mapDispatchToProps
)(_GrippieTextarea);

export const Editor = ({text, onSubmit, onChange, compile}) => (
  <section className="editor">
    <section className="editor-viewer">
      <AwesomeBar />
      <GrippieTextarea />
    </section>
    <section className="editor-submit">
      <button onClick={() => onSubmit(text)}>
        {'Save'}
      </button>
    </section>
    <CompiledPreview text={text} compile={compile}/>
  </section>
)
