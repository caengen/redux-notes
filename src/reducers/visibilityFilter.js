export const visibilityFilter = (state = 'NOTE_CREATED', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}
