export const createMarkup = (text) => {
  return {
    __html: marked(text)
  }
}
