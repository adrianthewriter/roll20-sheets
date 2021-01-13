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
        <Tag logic="title">
          <span>
            <Tag logic="action">
              <Tag name="action" />
            </Tag>
            <Tag not logic="action">
              uses
            </Tag>
          </span>
          <span class={styles.rolltitle}>
            <Tag name="title" placeholder="Ability Name" />
            <Tag logic="trait">
              {' '}
              (
              <Tag name="trait" placeholder="Trait Name" />)
            </Tag>
          </span>
        </Tag>
      </p>
    </div>
    <div class={styles.rollcontent}>
      <span class={styles.rolloutput}>
        <span class={styles.traitroll}>
          <Tag name="trait_die" placeholder="1" />
        </span>
        <Tag logic="zerodice">
          <span class={styles.skillroll}>
            <Tag name="zerodice" placeholder="1" />
          </span>
        </Tag>
        <Tag logic="dice">
          <span class={styles.skillroll}>
            <Tag name="dice" placeholder="1" />
          </span>
        </Tag>
      </span>

      <Tag logic="zerodice">
        <hr />
        <span class={styles.rollnote}>Take the lowest die value.</span>
      </Tag>

      <Tag logic="rollTotal() marked 1">
        <hr />
        <span class={styles.rollnote}>
          Your trait is marked. <br /> Gain +1 XP!
        </span>
      </Tag>
    </div>
  </Box>
)
