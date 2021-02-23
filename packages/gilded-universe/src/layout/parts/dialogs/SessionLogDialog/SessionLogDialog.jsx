import React from 'react'
import c from 'classnames'

import { Dialog, Table, Field, Toggle, Drawer } from '@components'
import styles from './SessionLogDialog.css'

// sessionlog Dialog
export default () => (
  <Dialog id="session-log" label="Session Log">
    <Table
      repeat
      id="sessionlog"
      header={['<view>', 'Session Date', 'XP Gained']}
    >
      <Toggle hidden id="session-header" />
      <Toggle id="session-toggle" value="hidden" />
      <Field type="text" id="session-date" />
      <Field id="session-xp" />
      <Drawer id="session-details" toggle="session-toggle">
        <Field type="textbox" id="session-desc" />
        <Toggle id="session-header" label="Mark as 'Header'" />
      </Drawer>
    </Table>
  </Dialog>
)
