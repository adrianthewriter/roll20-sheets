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
        <Tag name="dice" placeholder="1" />
        <Tag logic="rollTotal() dice 0">
          {' '}
          HITs
          <Tag not logic="initiative">
            <span className={styles.rollfumble}>Failure</span>
          </Tag>
        </Tag>
        <Tag logic="rollTotal() dice 1">
          {' '}
          HIT
          <Tag not logic="initiative">
            <span className={styles.rollsuccess}>Weak Success</span>
          </Tag>
        </Tag>
        <Tag logic="rollGreater() dice 1">
          {' '}
          HITs
          <Tag not logic="initiative">
            <span className={styles.rollcrit}>Strong Success</span>
            <Tag logic="rollWasCrit() dice">
              <span className={styles.rollresult}>with TRIGGERS!</span>
            </Tag>
          </Tag>
        </Tag>
      </span>

      <Tag logic="rollTotal() initiative 1">
        <hr />
        <span className={styles.rollnote}>
          <Tag name="shortName" /> is in group{' '}
          <Tag name="dice" placeholder="0" />.
        </span>
        <Tag logic="rollWasCrit() dice">
          <br />
          <span className={styles.rollnote}>
            Gain +1 Combat Action per TRIGGER rolled!
          </span>
        </Tag>
      </Tag>
    </div>
  </Box>
)
