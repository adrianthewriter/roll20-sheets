import React from 'react'
import c from 'classnames'

import styles from './Talents.css'

import { Box, Table, Field, Toggle } from '@components'

export default () => (
  <Box id="talents" label="Talents">
    <Table repeat id="talents">
      <Toggle hidden id="talent_max" value="expand" checked />
      <Toggle id="talent_max" value="expand" />
      <Field id="talent" label={true} />
      <Field type="textbox" id="talent-desc" label={true} />
    </Table>
  </Box>
)
