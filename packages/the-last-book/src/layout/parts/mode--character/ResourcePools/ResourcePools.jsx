import React from 'react'
import c from 'classnames'

import styles from './ResourcePools.css'
import { Field, Toggle, Table } from '@components'

export default () => (
  <div className={styles.resources}>
    <div className={c(styles.resource, 'resource--health')}>
      <h3>Health</h3>
      <Field hidden id="wound-level" value="0" />
      <Field hidden id="wound-level_max" value="6" />
      <div className={styles.container}>
        <Field id="health-0" label="Healthy" tooltip="No penalty." />
        <Field id="health-1" label="Minor" tooltip="Must check Stun to act." />
        <Field
          id="health-2"
          label="Moderate"
          tooltip="Must check Stun and Con. to act, and -2 to all combat ratings."
        />
        <Field
          id="health-3"
          label="Serious"
          tooltip="Must check Stun and Con. -25% to act, all action skills are halved, and -3 to all combat ratings."
        />
        <Field
          id="health-4"
          label="Severe"
          tooltip="Must check Stun and Con. -50% to act, all action skills are halved, and -6 to all combat ratings."
        />
        <Field
          id="health-5"
          label="Critical"
          tooltip="Immediately fall Unconscious."
        />
        <Field id="health_max" label="Capacity" action="restore-health" />
      </div>
    </div>

    <Table repeat id="additional-resources">
      <div className={styles.resource}>
        <h3>
          <Field hidden id="resource-name_max" />
          <Toggle id="resource-name_max" value="locked" />
          <Field id="resource-name" value="Resource" />
          <Field displayOnly id="resource-name" value="Resource" />
        </h3>
        <div className={styles.container}>
          <Field id="resource" label="Current" />
          <Field id="resource_max" label="Capacity" action="restore-resource" />
        </div>
      </div>
    </Table>
  </div>
)
