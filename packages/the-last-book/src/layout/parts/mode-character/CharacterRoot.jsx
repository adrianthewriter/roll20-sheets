import React from 'react'

import { Sheet, Section, Box, Field } from 'swordsmith'
import {
  Attributes,
  Experience,
  Advantages,
  Skillsets,
  Notes,
  Pools,
  Maneuvers,
  Techniques,
  Abilities,
  Equipment,
  Inventory,
} from './parts'

import styles from './CharacterRoot.css'

export default () => (
  <Sheet mode="character">
    <Section id="stats">
      <Attributes />
      <Experience />
    </Section>

    <Section id="details">
      <Box id="details" label="Details" isBoxed className={styles.noshade}>
        <Field id="character-name" label="Name" />
        <Field type="textbox" id="character-desc" label="Description" />
      </Box>

      <Advantages />
      <Skillsets />
      <Notes />
    </Section>

    <Section id="combat">
      <Pools />
      <div className={styles.moves}>
        <Maneuvers />
        <Techniques />
        <Abilities />
        <Equipment />
        <Inventory />
      </div>
    </Section>
  </Sheet>
)
