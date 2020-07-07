import React from 'react'

import { Box, Table, Toggle, Field, Drawer } from 'swordsmith'

import styles from './Experience.css'

export default (props) => (
  <Box id="experience" label="Experience" isBoxed hasToggle>
    <Table repeat id="sessionlog" header={['<view>', 'Session Date', 'CAP']}>
      <Toggle hidden id="session-header" />
      <Toggle type="collapse" id="session" />
      <Field id="session-date" />
      <Field id="session-cap" />
      <Drawer id="session">
        <Field type="textbox" id="session-desc" />
        <Toggle id="session-header" label="Mark as header" value="checked" />
      </Drawer>
    </Table>

    <h3>⸺ Total CAP ⸺</h3>
    <Table id="caplog" header={['Unspent', 'Spent']}>
      <Field hidden id="cap-attributes" />
      <Field hidden id="cap-advantages" />
      <Field hidden id="cap-skillsets" />
      <Field hidden id="cap-maneuvers" />
      <Field hidden id="cap-techniques" />
      <Field hidden id="cap-abilities" />

      <Field hidden id="cap-gained" />
      <Field displayOnly id="cap-unspent" />
      <Field displayOnly id="cap-total" />
    </Table>
  </Box>
)
