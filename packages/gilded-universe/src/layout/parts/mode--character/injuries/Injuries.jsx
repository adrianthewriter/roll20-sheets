import React from 'react'
import c from 'classnames'

import styles from './Injuries.css'

import { Box, Table, Field } from '@components'

export default () => (
  <Box id="injuries" label="Critical Injuries">
    <Table repeat id="injuries">
      <Field id="injury" label={true} />
      <Field id="injury_max" label={true} />
    </Table>
  </Box>
)
