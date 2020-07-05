import React from 'react'
import c from 'classnames'

import { Box, Table, Toggle, Field, Drawer } from 'swordsmith'

import styles from './Notes.css'

export default (props) => (
  <Box id="notes" label="Notes" isBoxed hasToggle>
    <Table repeat id="note" header={['<view>', 'Note']}>
      <Toggle hidden id="note-header" />
      <Toggle type="collapse" id="note" />
      <Field id="note-name" />

      <Drawer id="note">
        <Field type="textbox" id="note-desc" />
        <Toggle id="note-header" label="Mark as header" value="checked" />
      </Drawer>
    </Table>
  </Box>
)
