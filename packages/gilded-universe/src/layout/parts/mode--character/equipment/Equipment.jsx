import React from 'react'
import c from 'classnames'

import styles from './Equipment.css'

import { Box, Table, Field, Toggle } from '@components'

export default () => (
  <Box id="equipment" label="Equipment">
    <Field id="money" label="$" />

    <span>
      Roll [number] or higher on 1d6 to ready an item as a Fast Action.
    </span>
    <Table repeat id="equipment">
      <Toggle hidden id="item_max" value="expand" />
      <Toggle id="item_max" value="expand" />
      <Field id="item" label={true} />
      <Field type="textbox" id="item" label={true} />
    </Table>

    <h4>Other Items</h4>
    <Table repeat id="other-items">
      <Field id="item" />
    </Table>
  </Box>
)
