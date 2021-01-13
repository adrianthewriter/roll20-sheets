import React from 'react'
import c from 'classnames'

import { Box, Table, Field, Toggle, Meter, Drawer } from '@components'
import styles from './Gear.css'

export default () => (
  <Box id="gear" label="Gear">
    <p>
      You have the items listed below. If an item's decay fills up, lose it
      (until fixed).
    </p>
    <Table repeat id="items">
      <Toggle id="item-unlocked" />
      <div className={styles.item}>
        <span className={styles.label} name="attr_item-name">
          New Item
        </span>
        <span className={styles.text} name="attr_item-desc">
          Edit the description below and then click the "lock" icon.
        </span>
        <Toggle id="item-edit" value="hidden" />
        <Meter id="item-decay" label="Decay" size="9" max="1" />
      </div>

      <Drawer id="item-desc" toggle="item-edit">
        <Field id="item-name" placeholder="Item Name" />
        <Field type="textbox" id="item-desc" />
        <Field id="item-decay_max" label="Max Decay" />
        <Toggle id="item-edit" value="hidden" />
      </Drawer>
    </Table>

    <h3>Other Items</h3>
    <Field id="rations" label="Food &amp; Water" value="0" />
    <Field id="herbs" label="Plants &amp; Herbs" value="0" />
    <Field id="skins" label="Scraps &amp; Skins" value="0" />
    <Field id="barter" label="Barter" value="0" />
  </Box>
)
