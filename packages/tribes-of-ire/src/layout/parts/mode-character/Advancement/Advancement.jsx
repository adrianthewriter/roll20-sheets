import React from 'react'

import { Box, Field, Toggle, Meter } from '@components'
import styles from './Advancement.css'

export default () => (
  <Box id="advancement" label="Advancement">
    <p>
      Mark two <em>traits</em> each session. When you use a marked trait, gain
      +1 XP. Advance when full.
    </p>
    <Meter id="xp" label="XP" size="12" />
    <Field id="adv" placeholder="0" />
  </Box>
)
