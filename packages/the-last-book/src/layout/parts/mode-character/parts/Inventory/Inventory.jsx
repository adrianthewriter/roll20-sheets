import React from 'react'

import { Box, Table, Toggle, Field, Drawer } from 'swordsmith'

import styles from './Inventory.css'

export default (props) => (
  <Box id="inventory" label="Other Items" isBoxed hasToggle>
    <Table repeat id="otheritems" header={['<view>', 'Item', 'Qty.', 'Lbs.']}>
      <Toggle hidden id="item-header" />
      <Toggle type="collapse" id="item" />
      <Field id="item-name" />
      <Field id="item-quantity" />
      <Field id="item-weight" />
      <Drawer id="item">
        <Field type="textbox" id="item-desc" />
        <Toggle id="item-header" label="Mark as header" value="checked" />
        <Field
          displayOnly
          id="item-id"
          label
          tooltip="Copy this ID to reference this item when writing macros"
          value="..."
          className={styles.rowid}
        />
      </Drawer>
    </Table>

    <h3>⸺ Travel Encumbrance ⸺</h3>
    <Table
      id="travelload"
      header={[
        {
          label: 'Load',
          tooltip:
            'This value is auto-calculated based on SM level. It does not consider advantages you may have, but can be adjusted manually if needed',
        },
        {
          label: 'Level',
          tooltip:
            "This value is auto-calculated based on the 'travel load' and 'weight carried' fields",
        },
        {
          label: 'Weight',
          tooltip:
            "This value is auto-calculated from the items listed in both the 'Equipped Items' and 'Other Items' tables",
        },
      ]}
    >
      <Field hidden id="otheritems-totalweight" value="0" />
      <Field id="travelload-max" />
      <Field id="travelload-lvl" />
      <Field id="travelload-cur" />
    </Table>
  </Box>
)
