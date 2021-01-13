import React from 'react'

import { Sheet, Section, Box } from '@components'
import styles from './CharacterRoot.css'

import {
  Details,
  Traits,
  Skills,
  Advancement,
  Perks,
  Status,
  Talents,
  Role,
  Gear,
  Pacts,
} from '@layout/parts'

export default () => (
  <Sheet mode="character">
    <Section id="main">
      <Details />

      <div className={styles.block}>
        <Traits />
        <Skills />
        <Talents />
      </div>

      <div className={styles.block}>
        <Role />
        <Gear />
        <Pacts />
      </div>
    </Section>

    <Section id="side">
      <Status />
      <Advancement />
      <Perks />
    </Section>
  </Sheet>
)
