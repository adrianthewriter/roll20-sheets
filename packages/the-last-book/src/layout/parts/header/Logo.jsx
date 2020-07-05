import React from 'react'

import styles from './Header.css'

export default () => (
  <div className={styles.logo}>
    <img
      src="https://raw.githubusercontent.com/thelastbook/roll20-sheet/master/tlb-logo.png"
      alt="The Last Book"
    />
    <span>&mdash; A Sword &amp; Sorcery Game &mdash;</span>
  </div>
)
