import React from 'react'

import { Box, Tag } from '@templates/components'
import styles from '@templates/TemplatesRoot.css'

export default () => (
  <Box id="speed">
    <div class={styles.rollheader}>
      <p class={styles.rollprelude}>
        <em>
          <Tag name="name" placeholder="Character Name" />
        </em>
        <span>gets ready to fight!</span>
      </p>
    </div>
    <div class={styles.rollcontent}>
      <span class={styles.rolloutput}>
        <Tag name="roll" /> speed
      </span>
    </div>
  </Box>
)
