import React from 'react'
import c from 'classnames'

import { Field, Toggle } from '@components'
import styles from './Dialog.css'

export default ({ id, label, children }) => (
  <div className={c(styles.dialog, `sheet-dialog--${id}`)}>
    <div className={styles.container}>
      <Toggle id={`dialog_${id}`} value="hidden" />
      {label && <h2>{label}</h2>}
      <div className={styles.content}>{children}</div>
    </div>
  </div>
)
