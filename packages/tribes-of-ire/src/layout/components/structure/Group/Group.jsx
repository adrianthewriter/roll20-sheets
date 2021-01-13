import React from 'react'
import c from 'classnames'

// import { Field } from 'swordsmith'

import styles from './Group.css'

export default ({ id, label, children, ...props }) => (
  <div className={c(styles.group, `sheet-group--${id}`)}>
    {label && (
      <div className={styles.label}>
        <span>{label}</span>
      </div>
    )}
    <div className={styles.content}>{children}</div>
  </div>
)
