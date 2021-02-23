import React from 'react'
import c from 'classnames'

import styles from './Header.css'
import { Field, Toggle } from '@components'
import { Logo } from '@layout'

export default () => (
  <div className={styles.header}>
    <div>
      <Field id="character-name" label="Name" />
      <Field id="player-name" label="Player" />
      <div className={styles.container}>
        <Toggle id="dialog_session-log" />
        <Field id="character-xp" label="XP" hasMax />
      </div>
    </div>
    <Logo />
    <div>
      <Field id="character-age" label="Age" />
      <Field id="character-sex" label="Sex" />
      <Field id="character-ht" label="Height" />
      <Field id="character-wt" label="Weight" />
    </div>
  </div>
)
