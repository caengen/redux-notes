import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/NoteActions';

const Link = ({children, active, onClick}) => {
  if (active) {
    return (
      <p>{children}</p>
    )
  }

  return (
    <a href='#'
    onClick = {e => {
      e.preventDefault();
      onClick();
    }}
    >
      {children}
    </a>
  )
}

const mapStateToLinkProps = (state, ownProps) => {
  return {
    active: state.visibilityFilter === ownProps.filter
  }
}

const mapDispatchToLinkProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(actions.setVisibilityFilter(ownProps.filter));
    }
  }
}

export const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);
