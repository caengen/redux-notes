import React from 'react';
import { AwesomeBar } from '../containers/AwesomeBar.jsx';
import { CompiledPreview } from './CompiledPreview.jsx';

export const Editor = ({text, onSubmit, onChange, compile}) => (
  <section className="editor">
    <section className="editor-viewer">
      <AwesomeBar />
      <textarea id="editorTextarea" value={text} onChange={onChange}/>
    </section>
    <section className="editor-submit">
      <button onClick={() => onSubmit(text)}>
        {'Save'}
      </button>
    </section>
    <CompiledPreview text={text} compile={compile}/>
  </section>
)
