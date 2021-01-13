import React from 'react'
import c from 'classnames'

import { Box, Table, Field, Toggle, Meter, Drawer } from '@components'
import styles from './Aspects.css'

export default () => (
  <Box id="aspects" label="Aspects">
    <Table repeat id="aspects">
      <Toggle id="aspect-unlocked" />
      <div className={styles.aspect}>
        <span className={styles.label} name="attr_aspect-name">
          New Aspect
        </span>
        <span className={styles.text} name="attr_aspect-desc">
          Edit the description below and then click the "lock" icon.
        </span>
        <Toggle id="aspect-edit" value="hidden" />
        <Field hidden id="aspect-decay_max" value="0" />
        <Meter id="aspect-decay" label="Decay/Debt" size="9" max="0" />
      </div>

      <Drawer id="aspect-desc" toggle="aspect-edit">
        <Field id="aspect-name" placeholder="Aspect Name" />
        <Field type="textbox" id="aspect-desc" />
        <Field id="aspect-decay_max" label="Max Decay/Debt" />
        <Toggle id="aspect-edit" value="hidden" />
      </Drawer>
    </Table>
  </Box>
)
