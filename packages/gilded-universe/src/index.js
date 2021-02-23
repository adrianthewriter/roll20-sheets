import React from 'react'
import ReactDOM from 'react-dom'
import { renderToStaticMarkup } from 'react-dom/server'

import Sheet from '@layout'
import Templates from '@templates'

if (process.env.NODE_ENV !== 'production') {
  ReactDOM.render(<Sheet />, document.querySelector('.charactersheet'))
  ReactDOM.render(
    <Templates />,
    document.querySelector('.textchatcontainer .content')
  )
}

export default () =>
  renderToStaticMarkup(
    <>
      <Sheet />
      <Templates />
    </>
  )
