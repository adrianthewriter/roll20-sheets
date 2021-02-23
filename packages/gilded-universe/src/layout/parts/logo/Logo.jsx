import React from 'react'
import c from 'classnames'

import styles from './Logo.css'

export default () => (
  <div>
    <h1 className={styles.logo}>
      <span className={styles.logobox}>
        <span className={styles.logotype}>Gilded Universe</span>
      </span>
    </h1>
    <span className={styles.subtitle} name="attr_sheet-mode_max">
      Character Sheet
    </span>
  </div>
)
