import React from 'react'
import c from 'classnames'
import pkg from '../../package.json'

import styles from './SheetRoot.css'

import { Settings, SessionLogDialog, Character } from '@layout'

export default () => (
  <div
    className={c(styles.root, `sheet-${pkg.name.replace(/-/g, '')}`) || null}
  >
    <Settings.Dialogs />
    <Settings.Mode />
    <SessionLogDialog />
    <Character />
  </div>
)
