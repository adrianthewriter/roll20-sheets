import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import styles from './Button.css'

const RollButton = ({ id, roll, ...props }) => (
  <button type="roll" name={`roll_${id}`} value={roll} {...props}>
    {props.children && <span>{props.children}</span>}
  </button>
)

const ActionButton = ({ id, action, ...props }) => (
  <button type="action" name={`act_${id}`} {...props}>
    {props.children && <span>{props.children}</span>}
  </button>
)

const InnerButton = ({ id, roll, action, ...props }) => {
  if (roll) {
    return <RollButton id={id} roll={roll} {...props} />
  } else if (action) {
    return <ActionButton id={id} action={action} {...props} />
  }
}

const Button = ({ id, type, className, ...props }) => {
  return (
    <InnerButton
      id={id}
      className={c(type && styles[type], props.className) || null}
      {...props}
    />
  )
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'text']),
}

Button.defaultProps = {
  type: 'text',
  label: false,
  tooltip: false,
  placeholder: null,
  className: null,
}

export default Button
