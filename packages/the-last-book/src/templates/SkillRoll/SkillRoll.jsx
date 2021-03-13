import React from 'react'

import { Box, Tag } from '@templates'
import styles from '@templates/TemplatesRoot.css'

export default () => (
  <Box id="skill">
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
            <Tag name="title" placeholder="Skill" />
          </span>
        </Tag>
      </p>
    </div>
    <div className={styles.rollcontent}>
      <span className={styles.rolloutput}>
        <Tag logic="zerodice">
          <span className={styles.rollresult}>Untrained Skill</span>
        </Tag>
        <Tag name="dice" placeholder="1" />
        <Tag logic="rollTotal() dice 0">
          {' '}
          HITs
          <span className={styles.rollfumble}>Failure</span>
        </Tag>
        <Tag logic="rollTotal() dice 1">
          {' '}
          HIT
          <span className={styles.rollsuccess}>Weak Success</span>
        </Tag>
        <Tag logic="rollGreater() dice 1">
          {' '}
          HITs
          <span className={styles.rollcrit}>Strong Success</span>
          <Tag logic="rollWasCrit() dice">
            <span className={styles.rollresult}>with TRIGGERS!</span>
          </Tag>
        </Tag>
      </span>

      <Tag logic="rollTotal() marked 1">
        <Tag logic="rollGreater() dice 0">
          <hr />
          <span class={styles.rollnote}>
            You're using your Key Attribute. Gain +1 XP! (Except during combat)
          </span>
        </Tag>
      </Tag>

      <Tag logic="rollTotal() dice 0">
        <hr />
        <span class={styles.rollnote}>
          You learn from your mistakes. Gain +1 XP! (Except during combat)
        </span>
      </Tag>
    </div>
  </Box>
)
