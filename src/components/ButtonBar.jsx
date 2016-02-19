import React from 'react';

export const ButtonBar = ({text, onClick}) => {
  return (
    <div className="btn-bar">
      <section className="btn-bar-group">
        <i className="material-icons" title={'Strong <strong>'} onClick={() => {onClick('strong')}}>format_bold</i>
        <i className="material-icons" title={'Emphasis <em>'} onClick={() => {onClick('emphasis')}}>format_italic</i>
      </section>
      <section className="btn-bar-group">
        <i className="material-icons" title={'Hyperlik <a>'} onClick={() => {onClick('link')}}>insert_link</i>
        <i className="material-icons" title={'Blockquote <blockquote>'} onClick={() => {onClick('quote')}}>format_quote</i>
        <i className="material-icons" title={'Code sample <pre><code>'} onClick={() => {onClick('code')}}>code</i>
        <i className="material-icons" title={'Image <img>'} onClick={() => {onClick('image')}}>image</i>
        <i className="material-icons" title={'JavaScript/HTML/CSS snippet'} onClick={() => {onClick('web')}}>web</i>
      </section>
      <section className="btn-bar-group">
        <i className="material-icons" title={'Numbered list <ol>'} onClick={() => {onClick('numbered')}}>format_list_numbered</i>
        <i className="material-icons" title={'Bulleted list <ul>'} onClick={() => {onClick('list')}}>list</i>
        <i className="material-icons" title={'Heading <h1><h2>'} onClick={() => {onClick('heading')}}>title</i>
        <i className="material-icons" title={'Horizontal rule <hr>'} onClick={() => {onClick('hr')}}>border_horizontal</i>
      </section>
    </div>
  )
}
