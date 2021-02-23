import React from 'react'
import c from 'classnames'

import styles from './Augments.css'

import { Box, Table, Field, Toggle } from '@components'

export default () => (
  <Box id="augments" label="Augments">
    <Table repeat id="augments">
      <Toggle hidden id="augment_max" value="expand" />
      <Toggle id="augment_max" value="expand" />
      <Field id="augment" label={true} />
      <Field type="textbox" id="augment" label={true} />
    </Table>
  </Box>
)
