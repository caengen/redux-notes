import React from 'react';
import { CompiledPreview } from './CompiledPreview.jsx';

export const Editor = ({text, onSubmit, onChange, compile}) => (
  <section className="editor">
    <textarea onChange={onChange}/>
    <button onClick={() => onSubmit(text)}>
      {'Save'}
    </button>
    <CompiledPreview text={text} compile={compile}/>
  </section>
)
