import React from 'react'
import c from 'classnames'

import { Toggle } from '@components/'

import styles from './Drawer.css'

export default ({ id, toggle, children, ...props }) => (
  <>
    <Toggle hidden id={toggle} />
    <div className={c(styles.drawer, `sheet-drawer--${id}`)}>{children}</div>
  </>
)
