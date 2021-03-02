import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import { Button } from '@components'
import styles from './Field.css'

const HiddenField = ({ id, value, ...props }) => (
  <input
    type="hidden"
    name={`attr_${id}`}
    value={value}
    className={c(styles.field, props.className) || null}
  />
)

const StaticField = ({ id, value, ...props }) => (
  <span
    name={`attr_${id}`}
    className={c(styles.field, props.className) || null}
  >
    {value}
  </span>
)

const TextField = ({ id, value, placeholder, list, hasMax, ...props }) => (
  <>
    <input
      type="text"
      name={`attr_${id}`}
      value={value}
      placeholder={placeholder}
      className={c(styles.field, props.className) || null}
    />
    {hasMax && (
      <>
        <span className={styles.sep}>/</span>
        <input
          type="text"
          name={`attr_${id}_max`}
          value={value}
          placeholder={placeholder}
          className={c(styles.field, props.className) || null}
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
    className={c(styles.field, props.className) || null}
  />
)

const SelectBox = ({ id, options, ...props }) => (
  <select
    name={`attr_${id}`}
    className={c(styles.field, props.className) || null}
  >
    {options &&
      options.map((op) => (
        <option value={op.toLowerCase().replace(' ', '-')}>{op}</option>
      ))}
  </select>
)

const DateField = ({ id, value, placeholder, list, hasMax, ...props }) => (
  <>
    <input
      type="date"
      name={`attr_${id}`}
      value={value}
      placeholder={placeholder}
      className={c(styles.field, props.className) || null}
    />
    {hasMax && (
      <>
        <span className={styles.sep}> - </span>
        <input
          type="date"
          name={`attr_${id}_max`}
          value={value}
          placeholder={placeholder}
          className={c(styles.field, props.className) || null}
        />
      </>
    )}
  </>
)

const InnerField = ({ hidden, displayOnly, type, ...props }) => {
  if (hidden) {
    return <HiddenField {...props} />
  } else if (displayOnly) {
    return <StaticField {...props} />
  } else if (type === 'text') {
    return <TextField {...props} />
  } else if (type === 'textbox') {
    return <TextBox {...props} />
  } else if (type === 'select') {
    return <SelectBox {...props} />
  } else if (type === 'date') {
    return <DateField {...props} />
  } else {
    return null
  }
}

const Field = ({ id, label, ...props }) => {
  if (props.roll && label) {
    return (
      <div
        title={props.tooltip ? props.tooltip : null}
        className={c(styles.field, props.className) || null}
      >
        <Button id={id} roll={props.roll}>
          {label}
        </Button>
        <InnerField id={id} {...props} />
      </div>
    )
  } else if (props.action && label) {
    return (
      <div
        title={props.tooltip ? props.tooltip : null}
        className={c(styles.field, props.className) || null}
      >
        <Button id={props.action} action>
          {label}
        </Button>
        <InnerField id={id} {...props} />
      </div>
    )
  } else if (label) {
    return (
      <label
        title={props.tooltip ? props.tooltip : null}
        className={c(styles.field, props.className) || null}
      >
        <span>{label}</span>
        <InnerField id={id} {...props} />
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
  type: PropTypes.oneOf(['text', 'textbox', 'select', 'date']),
}

Field.defaultProps = {
  type: 'text',
  value: '',
  label: false,
  tooltip: false,
  placeholder: null,
  className: null,

  hidden: false,
  displayOnly: false,
}

export default Field
