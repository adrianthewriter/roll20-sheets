import React from 'react'
import c from 'classnames'

import styles from './Notes.css'

import { Box, Table, Field, Toggle } from '@components'

export default () => (
  <Box id="notes" label="Notes">
    <Table repeat id="notes">
      <Toggle hidden id="note_max" value="expand" />
      <Toggle id="note_max" value="expand" />
      <Field id="note" label={true} />
      <Field type="textbox" id="note" label={true} />
    </Table>
  </Box>
)
