import React from 'react'

import { Box, Table, Toggle, Field, Button, Drawer } from 'swordsmith'

import styles from './Techniques.css'

export default (props) => (
  <Box id="techniques" label="Techniques" isBoxed hasToggle>
    <Table
      repeat
      id="techniques"
      header={['<view>', 'Name', 'Par.', 'Vigor', 'Lapse']}
    >
      <Toggle hidden id="technique-header" />
      <Toggle type="collapse" id="technique" />
      <Field id="technique-name" />
      <Field id="technique-parent" />
      <Field id="technique-vigor" />
      <Field id="technique-lapse" />
      <Drawer id="technique">
        <div className={styles.controlrow}>
          <Field id="technique-type" label="Group" placeholder="-" />
          <Field id="technique-mastery" label="Mast." placeholder="-" />
          <Field id="technique-cap" label="CAP" placeholder="-" />
        </div>
        <div className={styles.buttonrow}>
          <Button id="technique-attackroll" roll={`@{technique-attackmacro}`}>
            Use Tech.
          </Button>
          <Button id="technique-damageroll" roll={`@{technique-damagemacro}`}>
            Roll Damage
          </Button>
          <Field hidden id="technique-attackmacro" />
          <Field hidden id="technique-damagemacro" />
        </div>

        <Field type="textbox" id="technique-desc" />
        <Toggle id="technique-header" label="Mark as header" value="checked" />
        <Field
          displayOnly
          id="technique-id"
          label
          tooltip="Copy this ID to reference this technique when writing macros"
          value="..."
          className={styles.rowid}
        />
      </Drawer>
    </Table>
  </Box>
)
