import React from 'react'

import { Box, Tag } from '@templates/components'
import styles from '@templates/TemplatesRoot.css'

export default () => (
  <Box id="attack">
    <div class={styles.rollheader}>
      <p class={styles.rollprelude}>
        <em>
          <Tag name="name" placeholder="Character Name" />
        </em>
        <Tag logic="attack">attacks</Tag>
        <Tag logic="defense">defends</Tag>
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
        ))}{' '}
        using
        <span class={styles.rolltitle}>
          <Tag name="move" placeholder="Power Move" />
        </span>
      </p>
    </div>
    <div class={styles.rollcontent}>
      <Tag logic="attack">
        <span class={styles.rolltype}>Attack Roll:</span>
      </Tag>
      <Tag logic="defense">
        <span class={styles.rolltype}>Defense Roll:</span>
      </Tag>

      <span class={styles.rolloutput}>
        <Tag logic="attack">
          <span class={styles.rollresult}>
            <Tag name="attack" placeholder="6" />
          </span>
        </Tag>
        {['2', '3', '4', '5'].map((n) => (
          <Tag logic={`attack${n}`}>
            <span class={styles.rollresult}>
              <Tag name={`attack${n}`} placeholder="6" />
            </span>
          </Tag>
        ))}

        <Tag logic="defense">
          <span class={styles.rollresult}>
            <Tag name="defense" placeholder="6" />
          </span>
        </Tag>
        {['2', '3', '4', '5'].map((n) => (
          <Tag logic={`defense${n}`}>
            <span class={styles.rollresult}>
              <Tag name={`defense${n}`} placeholder="6" />
            </span>
          </Tag>
        ))}
        <span class={styles.rollchance}>
          <Tag logic="attack">Strike</Tag>
          <Tag logic="defense">Defense</Tag>
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
