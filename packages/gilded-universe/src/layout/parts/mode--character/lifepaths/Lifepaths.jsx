import React from 'react'
import c from 'classnames'

import styles from './Lifepaths.css'

import { Box, Table, Field, Meter } from '@components'

export default () => (
  <Box id="lifepaths" label="Lifepaths">
    <Table repeat id="lifepaths">
      <Field id="lifepath" label={true} />
      <Meter
        id="lifepath-bonus"
        size="2"
        title="Take +2d6 (max 10d6) on two Skill checks related to this Lifepath."
      />
    </Table>
  </Box>
)
