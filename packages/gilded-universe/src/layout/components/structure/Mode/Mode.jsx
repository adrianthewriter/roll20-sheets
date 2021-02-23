import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import styles from './Mode.css'

const Mode = ({ mode, ...props }) => {
  return (
    <div
      className={c(styles.mode, `sheet-mode--${mode}`, props.className) || null}
    >
      {props.children}
    </div>
  )
}

Mode.propTypes = {
  mode: PropTypes.string.isRequired,
}

export default Mode
