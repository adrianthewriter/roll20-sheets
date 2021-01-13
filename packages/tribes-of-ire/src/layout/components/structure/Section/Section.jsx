import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import styles from './Section.css'

const Section = ({ id, ...props }) => {
  return (
    <div className={c(styles.sec, `sheet-sec--${id}`, props.className) || null}>
      {props.children}
    </div>
  )
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Section
