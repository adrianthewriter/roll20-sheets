import React from 'react'
import c from 'classnames'

import styles from './Equipment.css'

import { Box, Table, Field, Toggle, Button } from '@components'

export default () => (
  <Box id="equipment" label="Equipment">
    <Field id="money" label="$" />
    <Button
      hidden
      id="startingmoney"
      roll={`&{template:moneyRoll} {{name=@{character-name}}} [[ [[1000]] + [[@{starting-money-1}]] + [[@{starting-money-2}]] + [[@{starting-money-3}]] ]] {{@{starting-money-1|max}=$[[1]]}} {{@{starting-money-2|max}=$[[2]]}} {{@{starting-money-3|max}=$[[3]]}} {{total=$[[4]]}}`}
    />

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
