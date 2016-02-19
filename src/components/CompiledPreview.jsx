import React from 'react';

export const CompiledPreview = ({text, compile}) => (
  <div className="preview">
    <section dangerouslySetInnerHTML={compile(text)}></section>
  </div>
)
