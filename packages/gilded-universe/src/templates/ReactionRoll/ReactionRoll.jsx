import React from 'react'

import { Box, Tag } from '@templates'
import styles from '@templates/TemplatesRoot.css'

export default () => (
  <Box id="reaction">
    <div className={styles.rollheader}>
      <p className={styles.rollprelude}>
        <em>
          <Tag name="name" placeholder="Character Name" />
        </em>
        <Tag logic="title">
          <span>
            <Tag logic="action">
              <Tag name="action" />
            </Tag>
            <Tag not logic="action">
              checks
            </Tag>
          </span>
          <span className={styles.rolltitle}>
            <Tag name="title" placeholder="Reaction" />
          </span>
        </Tag>
      </p>
    </div>
    <div className={styles.rollcontent}>
      <span className={styles.rolloutput}>
        <Tag name="dice" placeholder="1" /> HITs
      </span>

      <Tag logic="rollWasCrit() dice">
        <hr />
        <span className={styles.rollnote}>
          Gain +1 Combat Action per TRIGGER rolled!
        </span>
      </Tag>
    </div>
  </Box>
)
