import React from 'react'
import c from 'classnames'

import styles from './Header.css'
import { Field, Toggle } from '@components'
import { Logo } from '@layout'

export default () => (
  <div className={styles.header}>
    <Logo />
    <div>
      <Field id="character-name" label="Full Name" />
      <div className={styles.container}>
        <Field id="character_name" label="Nickname" />
        <Field id="player-name" label="Player" />
      </div>
      <div className={styles.container}>
        <Toggle id="dialog_session-log" />
        <Field id="character-cap" label="CAP" hasMax />
      </div>
    </div>

    <div>
      <Field id="character-age" label="Age" />
      <Field id="character-sex" label="Sex" />
      <Field id="character-ht" label="Height" />
      <Field id="character-wt" label="Weight" />
    </div>
  </div>
)
