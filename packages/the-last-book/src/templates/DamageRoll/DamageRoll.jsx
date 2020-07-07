import React from 'react'

import { Box, Tag } from '@templates/components'
import styles from '@templates/TemplatesRoot.css'

export default () => (
  <Box id="damage">
    <div class={styles.rollheader}>
      <p class={styles.rollprelude}>
        <em>
          <Tag name="name" placeholder="Character Name" />
        </em>
        <span>
          <Tag logic="action">
            <Tag name="action" />
          </Tag>
          <Tag not logic="action">
            hits
          </Tag>
        </span>
        <Tag logic="weapon">
          <span>with their</span>
          <em>
            <Tag name="weapon" placeholder="Sword" />
          </em>
        </Tag>
        {['2', '3', '4', '5'].map((n) => (
          <Tag logic={`weapon${n}`}>
            <span>then their</span>
            <em>
              <Tag name={`weapon${n}`} placeholder="Sword" />
            </em>
          </Tag>
        ))}
        <Tag logic="move">
          using
          <span class={styles.rolltitle}>
            <Tag name="move" placeholder="Power Move" />
          </span>
        </Tag>
      </p>
    </div>
    <div class={styles.rollcontent}>
      <Tag logic="damage">
        <span class={styles.rolltype}>Damage Roll:</span>
      </Tag>
      <span class={styles.rolloutput}>
        <Tag logic="damage">
          <span class={styles.rollresult}>
            <Tag name="damage" placeholder="6" />
          </span>
        </Tag>
        {['2', '3', '4', '5'].map((n) => (
          <Tag logic={`damage${n}`}>
            <span class={styles.rollresult}>
              <Tag name={`damage${n}`} placeholder="6" />
            </span>
          </Tag>
        ))}

        <span class={styles.rollchance}>
          <Tag name="type" placeholder="Slashing" />
        </span>
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
