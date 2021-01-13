import React from 'react'
import c from 'classnames'

// import { Field } from 'swordsmith'

import styles from './Meter.css'

export default ({
  id,
  label,
  size = 1,
  value,
  max = false,
  unlinked = false,
  ...props
}) => (
  <div className={styles.meter}>
    {label && <span className={styles.label}>{label}</span>}

    <input
      type="checkbox"
      name={`attr_${id}`}
      value={value ? value : '0'}
      checked="checked"
      className={c(styles.hidden, styles.meterbox)}
    />

    {max && (
      <input
        type="hidden"
        name={`attr_${id}_max`}
        value={max}
        className={c(styles.hidden, styles.meterbox)}
      />
    )}

    {Array.from(Array(parseInt(size)), (e, i) => i + 1).map((i) => (
      <>
        <input
          type="checkbox"
          name={unlinked ? `attr_${id}-${i}` : `attr_${id}`}
          value={i}
          className={c(styles.meterbox)}
        />
        <span></span>
      </>
    ))}
  </div>
)
