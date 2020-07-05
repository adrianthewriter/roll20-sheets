import React from 'react'

import Logo from './Logo'
import Mode from './Mode'

import styles from './Header.css'

export default () => (
  <div className={styles.header}>
    <Logo />
    <Mode />
  </div>
)
