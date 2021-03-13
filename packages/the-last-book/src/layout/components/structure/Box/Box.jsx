import React from 'react'
import c from 'classnames'

import { Toggle } from '@components/'

import styles from './Box.css'

export default ({ id, label, hasToggle, children, ...props }) => (
  <div className={c(styles.box, `box--${id}`)}>
    {label && (
      <h2 className={styles.header}>
        {label && <span className={styles.label}>{label}</span>}
        {hasToggle && <Toggle id={`box--${id}`} value="hidden" />}
      </h2>
    )}
    {hasToggle && <Toggle hidden id={`box--${id}`} />}
    <div className={styles.content}>{children}</div>
  </div>
)
