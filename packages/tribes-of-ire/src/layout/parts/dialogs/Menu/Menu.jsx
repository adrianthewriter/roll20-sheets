import React from 'react'
import c from 'classnames'

import { Toggle } from '@components'
import styles from './Menu.css'

export default ({ id, label, children }) => (
  <div className={styles.menu}>
    <Toggle id="sheet_settings" label="Settings" value="hidden" />
    <Toggle id="sheet_rules" label="Rules" value="hidden" />
  </div>
)
