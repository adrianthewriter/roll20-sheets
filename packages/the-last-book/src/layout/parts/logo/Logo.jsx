import React from 'react'
import c from 'classnames'

import styles from './Logo.css'

export default () => (
  <div className={styles.logo}>
    <h1 className={styles.logomark}>
      <img
        src="https://raw.githubusercontent.com/thelastbook/roll20-sheet/master/tlb-logo.png"
        alt="The Last Book"
      />
    </h1>
    <span className={styles.subtitle} name="attr_sheet-mode_max">
      Character Sheet
    </span>
  </div>
)
