import React from 'react'

import { Box, Tag } from '@templates'
import styles from '@templates/TemplatesRoot.css'

export default () => (
  <Box id="money">
    <div className={styles.rollheader}>
      <p className={styles.rollprelude}>
        <em>
          <Tag name="name" placeholder="Character Name" />
        </em>
        <span>rolls for</span>
        <span className={styles.rolltitle}>starting money</span>
      </p>
    </div>
    <div className={styles.rollcontent}>
      <span className={styles.rolloutput}>
        <span className={styles.rollnote}>$1000 for starting out</span>
        <br />
        <Tag logic="allprops() name total">
          <span
            className={styles.rollnote}
          >{`\${{value}} from "The {{key}}"`}</span>
          <br />
        </Tag>
        <hr />
        <span className={styles.rollresult}>
          $<Tag name="total" /> total
        </span>
      </span>
    </div>
  </Box>
)
