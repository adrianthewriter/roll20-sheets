import React from 'react'
import c from 'classnames'

// import { Field } from 'swordsmith'

import styles from './Toggle.css'

export default ({
  id,
  label,
  value,
  desc,
  checked,
  hidden,
  disabled,
  ...props
}) => (
  <>
    {hidden && (
      <input
        type="hidden"
        name={`attr_${id}`}
        value={checked ? 'checked' : null}
        className={c(styles.toggle, styles.togglebox)}
      />
    )}

    {!hidden && (
      <label className={styles.toggle}>
        <input
          type="checkbox"
          name={`attr_${id}`}
          value={value ? value : 'checked'}
          checked={checked}
          disabled={disabled ? 'disabled' : null}
          className={styles.togglebox}
        />
        <span>{label && label}</span>
        {desc && <span className={styles.desc}>{desc}</span>}
      </label>
    )}
  </>
)
