import React from 'react'
import c from 'classnames'

import { Box, Table, Toggle, Field, Button, Drawer } from 'swordsmith'

import styles from './Abilities.css'

export default (props) => (
  <Box id="abilities" label="Abilities" isBoxed hasToggle>
    <Table
      repeat
      id="prayers"
      header={['<view>', 'Name', 'Par.', 'Cost', 'Act.']}
    >
      <Toggle hidden id="prayer-header" />
      <Toggle type="collapse" id="prayer" />
      <Field id="prayer-name" />
      <Field id="prayer-parent" />
      <Field id="prayer-cost" />
      <Field id="prayer-act" />
      <Drawer id="prayer">
        <div className={styles.controlrow}>
          <Field id="prayer-type" label="Group" placeholder="-" />
          <Field id="prayer-mastery" label="Mast." placeholder="-" />
          <Field id="prayer-cap" label="CAP" placeholder="-" />
        </div>
        <Toggle hidden id="prayer-usemacros" value="" />
        <div className={styles.buttonrow}>
          <Button id="prayer-attackroll" roll={`@{prayer-attackmacro}`}>
            Use Ability
          </Button>
          <Button id="prayer-damageroll" roll={`@{prayer-damagemacro}`}>
            Roll Damage
          </Button>
          <Field hidden id="prayer-attackmacro" />
          <Field hidden id="prayer-damagemacro" />
        </div>

        <Field type="textbox" id="prayer-desc" />
        <Toggle id="prayer-usemacros" label="Use macros" value="usemacros" />
        <Toggle id="prayer-header" label="Mark as header" value="checked" />
        <Field
          displayOnly
          id="prayer-id"
          label
          tooltip="Copy this ID to reference this prayer when writing macros"
          value="..."
          className={styles.rowid}
        />
      </Drawer>
    </Table>
  </Box>
)
