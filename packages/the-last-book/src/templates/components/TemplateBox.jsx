import React from 'react'

import styles from '@templates/TemplatesRoot.css'

export default ({ id, ...props }) => (
  <rolltemplate className={`rolltemplate-${id}Roll`}>
    <div className={styles.rollbox}>{props.children}</div>
  </rolltemplate>
)
