import React from 'react';

export const Link = ({children, active, onLinkClick, onSpanClick}) => {
  if (active) {
    return (
      <span
        className='link'
        onClick={onSpanClick}>
        {children}
      </span>
    )
  }

  return (
    <a
      className='link'
      href='#'
      onClick = {e => {
      e.preventDefault();
      onLinkClick();
    }}
    >
    <div>{children}</div>
    </a>
  )
}
