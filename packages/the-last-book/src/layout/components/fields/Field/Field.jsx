import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import { Button } from '@components'
import styles from './Field.css'

const HiddenField = ({ id, value, ...props }) => (
  <input type="hidden" name={`attr_${id}`} value={value} />
)

const StaticField = ({ id, value, ...props }) => (
  <>
    <span name={`attr_${id}`} className={props.className}>
      {value}
    </span>
    {props.hasMax && (
      <>
        <span className={styles.sep}></span>
        <span name={`attr_${id}`} className={props.className}>
          {value}
        </span>
      </>
    )}
  </>
)

const TextField = ({ id, value, placeholder, list, ...props }) => (
  <>
    <input
      type={props.type}
      name={`attr_${id}`}
      list={list}
      value={value}
      placeholder={placeholder}
      className={props.className}
    />
    {props.hasMax && (
      <>
        <span className={styles.sep}></span>
        <input
          type="text"
          name={`attr_${id}_max`}
          value={value}
          placeholder={placeholder}
          className={props.className}
        />
      </>
    )}
  </>
)

const TextBox = ({ id, value, placeholder, ...props }) => (
  <textarea
    name={`attr_${id}`}
    value={value}
    placeholder={placeholder}
    className={props.className}
  />
)

const SelectBox = ({ id, children, ...props }) => (
  <select name={`attr_${id}`} className={props.className}>
    {children}
  </select>
)

const InnerField = ({ hidden, displayOnly, type, ...props }) => {
  if (hidden) {
    return <HiddenField {...props} />
  } else if (displayOnly) {
    return <StaticField {...props} />
  } else if (type === 'textbox') {
    return <TextBox {...props} />
  } else if (type === 'select') {
    return <SelectBox {...props} />
  } else {
    return <TextField type={type} {...props} />
  }
}

const Field = ({ id, label, className, ...props }) => {
  if (props.roll && label) {
    return (
      <div
        title={props.tooltip ? props.tooltip : null}
        className={c(styles.field, className) || null}
      >
        <Button
          id={id}
          label={label}
          roll={props.roll}
          className={styles.label}
        />
        <InnerField id={id} className={styles.innerfield} {...props} />
      </div>
    )
  } else if (props.action && label) {
    return (
      <div
        title={props.tooltip ? props.tooltip : null}
        className={c(styles.field, className) || null}
      >
        <Button id={id} label={label} action className={styles.label} />
        <InnerField id={id} className={styles.innerfield} {...props} />
      </div>
    )
  } else if (label) {
    return (
      <label
        title={props.tooltip ? props.tooltip : null}
        className={c(styles.field, className) || null}
      >
        <span className={styles.label}>{label}</span>
        <InnerField id={id} className={styles.innerfield} {...props} />
      </label>
    )
  } else {
    return (
      <InnerField
        id={id}
        className={c(styles.field, props.className) || null}
        {...props}
      />
    )
  }
}

Field.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'textbox', 'select']),
}

Field.defaultProps = {
  type: 'text',
  value: '',
  list: false,
  label: false,
  tooltip: false,
  placeholder: null,
  className: null,

  hidden: false,
  displayOnly: false,
}

export default Field
