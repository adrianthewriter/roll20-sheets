import React from 'react'
import c from 'classnames'

import { Box, Table, Toggle, Field, Drawer } from 'swordsmith'

import styles from './Advantages.css'

export default (props) => (
  <Box id="advantages" label="Advantages/Disadvantages" isBoxed hasToggle>
    <Table repeat id="advantage" header={['<view>', 'Name', 'Type']}>
      <Toggle hidden id="advantage-header" />
      <Toggle type="collapse" id="advantage" />
      <Field id="advantage-name" />
      <Field
        type="select"
        id="advantage-type"
        options={['', 'Advantage', 'Affliction', 'Ailment', 'Obstacle']}
      />
      <Drawer id="advantage">
        <Field type="textbox" id="advantage-desc" />
        <Toggle id="advantage-header" label="Mark as header" value="checked" />
        <Field id="advantage-cap" label="CAP" placeholder="-" />
      </Drawer>
    </Table>
  </Box>
)
