import React from 'react'
import c from 'classnames'

import { Box, FieldGroup, Field } from 'swordsmith'

import styles from './Pools.css'

export default (props) => (
  <Box id="pools" label="Resource Pools">
    <FieldGroup id="health" label="Health">
      <Field id="health-0" label="Healthy" />
      <Field id="health-1" label="Minor" />
      <Field id="health-2" label="Moderate" />
      <Field id="health-3" label="Serious" />
      <Field id="health-4" label="Severe" />
      <Field id="health-5" label="Critical" end />
      <Field id="health_max" label="Capacity" start end />

      <Field hidden id="wound-level" value="0" />
      <Field hidden id="wound-level_max" value="6" />
    </FieldGroup>

    <div className={styles.resources}>
      <FieldGroup id="vigor" label="Vigor">
        <Field id="vigor" label="Current" />
        <Field id="vigor_max" label="Capacity" />
      </FieldGroup>

      <FieldGroup id="resolve" label="Resolve">
        <Field id="resolve" label="Current" />
        <Field id="resolve_max" label="Capacity" />
      </FieldGroup>

      <FieldGroup id="favor" label="Favor">
        <Field id="favor" label="Current" />
        <Field id="favor_max" label="Capacity" />
      </FieldGroup>
    </div>
  </Box>
)
