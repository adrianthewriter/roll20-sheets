import React from 'react'
import ReactDOM from 'react-dom'
import { renderToStaticMarkup } from 'react-dom/server'
import Sheet from './layout/SheetRoot'
import Templates from './templates/TemplatesRoot'

if (process.env.NODE_ENV !== 'production') {
  ReactDOM.render(<Sheet />, document.querySelector('.charactersheet'))
  ReactDOM.render(<Templates />, document.querySelector('#textchat .content'))
}

export default () => {
  const html = renderToStaticMarkup(
    <>
      <Sheet />
      <Templates />
    </>
  )
  return html
}
