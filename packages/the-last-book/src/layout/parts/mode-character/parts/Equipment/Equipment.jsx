import React from 'react'

import { Box, Table, Toggle, Field, Button, Drawer } from 'swordsmith'

import styles from './Equipment.css'

export default (props) => (
  <Box id="equipment" label="Equipment" isBoxed hasToggle>
    <Table
      repeat
      id="armor"
      header={['<view>', 'Armor', 'Location', 'DR', 'Lbs.']}
    >
      <Toggle hidden id="armor-header" />
      <Toggle type="collapse" id="armor" />
      <Field id="armor-name" />
      <Field id="armor-loc" />
      <Field id="armor-dr" />
      <Field id="armor-weight" />
      <Drawer id="armor">
        <Field type="textbox" id="armor-desc" />
        <Toggle id="armor-header" label="Mark as header" value="checked" />
        <Field
          displayOnly
          id="armor-id"
          label
          tooltip="Copy this ID to reference this armor when writing macros"
          value="..."
          className={styles.rowid}
        />
      </Drawer>
    </Table>

    <Table repeat id="weapons" header={['<view>', 'Weapon', 'Damage', 'Lbs.']}>
      <Toggle hidden id="weapon-header" />
      <Toggle type="collapse" id="weapon" />
      <Field id="weapon-name" />
      <Field id="weapon-damage" />
      <Field id="weapon-weight" />
      <Field hidden id="weapon-damage1" value="" />
      <Field hidden id="weapon-damage2" value="" />
      <Field hidden id="weapon-damage3" value="" />
      <Field hidden id="weapon-damage1_max" value="0" />
      <Field hidden id="weapon-damage2_max" value="0" />
      <Field hidden id="weapon-damage3_max" value="0" />
      <Drawer id="weapon">
        <div className={styles.controlrow}>
          <Field hidden id="weapon-type" value="melee" />
          <Field
            type="select"
            id="weapon-type"
            label="Type"
            options={['', 'Melee', 'Thrown', 'Ranged', 'Shield']}
          />
          {/* Melee Weapon */}
          <Field id="weapon-swing" label="Swing" value="+0" />
          <Field id="weapon-thrust" label="Thrust" value="+0" />
          <Field id="weapon-parry" label="Parry" value="+0" />
          <Field id="weapon-block" label="Block" value="+0" />
          {/* Thrown Weapon */}
          <Field id="weapon-throw" label="Throw" value="+0" />
          <Field id="weapon-quantity" label="Qty." value="0" hasMax />
          {/* Ranged Weapon */}
          <Field id="weapon-shoot" label="Shoot" value="+0" />
          <Field id="weapon-acc" label="Acc." value="+0" />
          <Field id="weapon-ammo" label="Ammo." value="0" hasMax />
          {/* Shield */}
          <Field id="weapon-block" label="Block" value="+0" />
          <Field id="weapon-dr" label="DR" value="0" />
        </div>
        <Toggle hidden id="weapon-equipped" value="" />
        <div className={styles.buttonrow}>
          {/* <Button id="weapon-equip" action>
            Weapon
          </Button> */}
          <Button id="weapon-attackroll" roll={`@{weapon-attackmacro}`}>
            Attack
          </Button>
          <Button id="weapon-defenseroll" roll={`@{weapon-defensemacro}`}>
            Defense
          </Button>
          <Button id="weapon-damageroll" roll={`@{weapon-damagemacro}`}>
            Damage
          </Button>
          <Field hidden id="weapon-attackmacro" />
          <Field hidden id="weapon-defensemacro" />
          <Field hidden id="weapon-damagemacro" />
        </div>
        <Field type="textbox" id="weapon-desc" />
        <Toggle id="weapon-equipped" label="Equip" value="equipped" />
        <Toggle id="weapon-offhand" label="Mark as offhand" value="-2" />
        <Field
          displayOnly
          id="weapon-id"
          label
          tooltip="Copy this ID to reference this weapon when writing macros"
          value="..."
          className={styles.rowid}
        />
      </Drawer>
    </Table>

    <Table repeat id="items" header={['<view>', 'Item', 'Qty.', 'Lbs.']}>
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

    <h3>⸺ Combat Encumbrance ⸺</h3>
    <Table
      id="combatload"
      header={[
        {
          label: 'Load',
          tooltip:
            'This value is auto-calculated based on ST level. It does not consider advantages you may have, but can be adjusted manually if needed',
        },
        {
          label: 'Level',
          tooltip:
            "This value is auto-calculated based on the 'combat load' and 'weight carried' fields",
        },
        {
          label: 'Weight',
          tooltip:
            "This value is auto-calculated from the items listed in the 'Equipped Items' table",
        },
      ]}
    >
      <Field hidden id="armor-totalweight" value="0" />
      <Field hidden id="weapons-totalweight" value="0" />
      <Field hidden id="items-totalweight" value="0" />

      <Field id="combatload-max" />
      <Field id="combatload-lvl" />
      <Field id="combatload-cur" />
    </Table>
  </Box>
)
