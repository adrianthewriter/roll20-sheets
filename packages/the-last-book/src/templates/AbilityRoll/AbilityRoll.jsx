import React from 'react'

import { Box, Tag } from '@templates/components'
import styles from '@templates/TemplatesRoot.css'

export default () => (
  <Box id="ability">
    <div class={styles.rollheader}>
      <p class={styles.rollprelude}>
        <em>
          <Tag name="name" placeholder="Character Name" />
        </em>
        <span>uses</span>
        <span class={styles.rolltitle}>
          <Tag name="title" placeholder="Ability Name" />
        </span>
      </p>
    </div>
    <div class={styles.rollcontent}>
      <Tag logic="rolltype">
        <span class={styles.rolltype}>
          <Tag name="rolltype" placeholder="Ability" /> Roll:
        </span>
      </Tag>
      <span class={styles.rolloutput}>
        <span class={styles.rollresult}>
          <Tag name="roll" placeholder="50" />%
        </span>
        <span class={styles.rollchance}>
          vs. <Tag name="chance" placeholder="90" />%
        </span>
        <Tag logic="rollLess() roll 3">
          <span class={styles.rollcrit}>Critical Success!</span>
        </Tag>
        <Tag logic="rollTotal() roll 99">
          <span class="sheet-rollfail">Auto Failure</span>
        </Tag>
        <Tag logic="rollTotal() roll 100">
          <span class="sheet-rollfumble">Critical Failure!</span>
        </Tag>
      </span>
      <Tag logic="note">
        <hr />
        <span class={styles.rollnote}>
          <Tag name="note" placeholder="This is a note" />
        </span>
      </Tag>
    </div>
  </Box>
)
