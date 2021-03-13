import React from 'react'
import c from 'classnames'

import { Toggle } from '@components/'

import styles from './Drawer.css'

export default ({ id, toggle, children, ...props }) => (
  <>
    <Toggle hidden id={toggle} value="hidden" />
    <div className={c(styles.drawer, `drawer--${id}`)}>{children}</div>
  </>
)
