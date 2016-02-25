marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true
});

export const createMarkup = (text) => {
  return {
    __html: marked(text)
  }
}

export const getVisibleNotes = (notes, visibilityFilter) => {
  return notes.filter(n => n.noteState === visibilityFilter.filter);
}
