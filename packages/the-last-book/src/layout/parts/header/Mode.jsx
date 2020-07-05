import React from 'react'
// import c from 'classnames'

import { Field } from 'swordsmith'

import styles from './Header.css'

export default () => (
  <div className={styles.mode}>
    <Field displayOnly id="sheet_mode" value="character" />
  </div>
)
