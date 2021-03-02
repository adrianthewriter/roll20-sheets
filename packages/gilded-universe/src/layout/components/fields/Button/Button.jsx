import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import styles from './Button.css'

const RollButton = ({ id, roll, ...props }) => (
  <button type="roll" name={`roll_${id}`} value={roll} {...props}>
    {props.children && <span>{props.children}</span>}
  </button>
)

const ActionButton = ({ id, ...props }) => (
  <button type="action" name={`act_${id}`} {...props}>
    {props.children && <span>{props.children}</span>}
  </button>
)

const InnerButton = ({ id, roll, action, ...props }) => {
  if (roll) {
    return <RollButton id={id} roll={roll} {...props} />
  } else if (action) {
    return <ActionButton id={id} {...props} />
  } else {
    return null
  }
}

const Button = ({ id, roll, action, hidden, className, ...props }) => {
  const type = roll ? 'roll' : action ? 'action' : 'text'
  return (
    <InnerButton
      id={id}
      type={type}
      roll={roll}
      action={action}
      className={
        c(type && styles[type], hidden && styles['hidden'], className) || null
      }
      {...props}
    />
  )
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
}

Button.defaultProps = {
  label: false,
  tooltip: false,
  placeholder: null,
  className: null,
  hidden: false,
}

export default Button
