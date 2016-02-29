import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/NoteActions';
import { Link } from '../components/Link.jsx';

const mapStateToLinkProps = (state, ownProps) => {
  return {
    active: state.visibilityFilter.filter === ownProps.filter
  }
}

const mapDispatchToLinkProps = (dispatch, ownProps) => {
  return {
    onLinkClick: () => {
      dispatch(actions.setVisibilityFilter(ownProps.filter));
    },
    onSpanClick: () => {
      dispatch(actions.toggleVisibilityFilter());
    }
  }
}

export const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);
