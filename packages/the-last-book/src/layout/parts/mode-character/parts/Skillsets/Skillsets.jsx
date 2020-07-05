import React from 'react'
import c from 'classnames'

import { Box, Table, Toggle, Field, Button, Drawer } from 'swordsmith'

import styles from './Skillsets.css'

export default (props) => (
  <Box id="skillsets" label="Skills" isBoxed hasToggle>
    <Table
      repeat
      id="skills"
      header={['<view>', 'Name', 'Level', 'Par.', 'Diff.', 'Chance']}
    >
      <Toggle hidden id="skill-skillset" />
      <Toggle type="collapse" id="skill" />
      <Field id="skill-name" />
      <Field id="skill-level" />
      <Field id="skill-parent" />
      <Field id="skill-diff" />
      <Field id="skill-chance" />
      <Button
        id="skill-roll"
        roll={`&{template:TLBskillRoll} {{name=@{character-name}}} {{skill=@{skill-name}}} {{roll=[[d100cs<3cf>99]]}} {{chance=@{skill-chance}}} {{note=?{Note}}}`}
      />
      <Drawer id="skill">
        <Field type="textbox" id="skill-desc" />
        <Toggle id="skill-skillset" label="Mark as skillset" value="checked" />
        <Field
          displayOnly
          id="skill-id"
          label
          tooltip="Copy this ID to reference this skill when writing macros"
          value="..."
          className={styles.rowid}
        />
      </Drawer>
    </Table>
  </Box>
)
