import React from 'react'
import c from 'classnames'

import styles from './Advantages.css'
import { Field, Toggle, Drawer, Table, Box } from '@components'

export default () => (
  <div>
    <h3>Advantages &amp; Disadvantages</h3>
    <div className={styles.advantages}>
      <datalist id="combat-styles--basic"></datalist>
      <datalist id="combat-styles">
        <option>Basic Combat</option>
        <option>Specific Weapon</option>
        <option>Weapon Group</option>
        <option>All Weapons</option>
      </datalist>

      <Table repeat hasToggle id="advantages" header={['<view>', 'Advantages']}>
        <>
          <Field hidden id="advantage--header" />
          <div className={styles.advantage}>
            <Toggle
              id="advantage--collapse"
              value="hidden"
              title="Show/hide additional fields"
            />
            <Field id="advantage--name" placeholder="Advantage Name" />

            <Drawer id="advantage" toggle="advantage--collapse">
              <Field type="textbox" id="advantage--desc" />
              <div className={styles.container}>
                <Toggle
                  id="advantage--header"
                  label="Mark as header"
                  value="checked"
                />
                <Field id="advantage--cap" label="CAP" placeholder="-" />
              </div>
            </Drawer>
          </div>
        </>
      </Table>
    </div>

    <div className={styles.disadvantages}>
      <datalist id="disadvantage-types">
        <option>Affliction</option>
        <option>Ailment</option>
        <option>Obstacle</option>
      </datalist>

      <Table
        repeat
        hasToggle
        id="disadvantages"
        header={['<view>', 'Disadvantages', 'Type']}
      >
        <>
          <Field hidden id="disadvantage--header" />
          <div className={styles.disadvantage}>
            <Toggle
              id="disadvantage--collapse"
              value="hidden"
              title="Show/hide additional fields"
            />
            <Field id="disadvantage--name" placeholder="Disadvantage Name" />
            <Field id="disadvantage--type" list="disadvantage-types" />

            <Drawer id="disadvantage" toggle="disadvantage--collapse">
              <Field type="textbox" id="disadvantage--desc" />
              <div className={styles.container}>
                <Toggle
                  id="disadvantage--header"
                  label="Mark as header"
                  value="checked"
                />

                <Field hidden id="disadvantage--type" />
                <Field hidden id="disadvantage--overcome" />
                <Toggle
                  id="disadvantage--overcome"
                  label="Overcome Obstacle"
                  value="checked"
                />
                <Field
                  id="disadvantage--cap"
                  label="CAP"
                  placeholder="-"
                  hasMax
                />
              </div>
            </Drawer>
          </div>
        </>
      </Table>
    </div>
  </div>
)
