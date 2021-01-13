import React from 'react'

import { Sheet, Section, Box } from '@components'
import styles from './GoonRoot.css'

import {
  GoonDetails as Details,
  GoonStatus as Status,
  GoonTraits as Traits,
  GoonAspects as Aspects,
} from '@layout/parts'

export default () => (
  <Sheet mode="goon">
    <Section id="main">
      <Details />

      <div className={styles.block}>
        <Traits />
        <Aspects />
      </div>
    </Section>

    <Section id="side">
      <Status />
    </Section>
  </Sheet>
)
