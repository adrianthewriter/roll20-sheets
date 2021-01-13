import React from 'react'

import styles from '@templates/TemplatesRoot.css'

export default ({ id, ...props }) => (
  <rolltemplate class={styles[`rolltemplate-${id}Roll`]}>
    <div class={styles.rollbox}>{props.children}</div>
  </rolltemplate>
)
