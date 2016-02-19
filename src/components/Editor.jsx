import React from 'react';
import { CompiledPreview } from './CompiledPreview.jsx';

export const Editor = ({text, onSubmit, onChange, compile}) => (
  <section className="editor">
    <section className="editor-viewer">
      <ButtonBar />
      <textarea onChange={onChange}/>
    </section>
    <button onClick={() => onSubmit(text)}>
      {'Save'}
    </button>
    <CompiledPreview text={text} compile={compile}/>
  </section>
)

export const ButtonBar = () => {
  return (
    <div className="btn-bar">
      <section className="btn-bar-group">
        <i className="material-icons">format_bold</i>
        <i className="material-icons">format_italic</i>
      </section>
      <section className="btn-bar-group">
        <i className="material-icons">insert_link</i>
        <i className="material-icons">format_quote</i>
        <i className="material-icons">code</i>
        <i className="material-icons">image</i>
        <i className="material-icons">web</i>
      </section>
      <section className="btn-bar-group">
        <i className="material-icons">format_list_numbered</i>
        <i className="material-icons">list</i>
        <i className="material-icons">title</i>
        <i className="material-icons">border_horizontal</i>
      </section>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    text: state.notePreview
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (node) => {
      
    }
  }
}

export const AwesomeBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonBar);
