import React from 'react'
import c from 'classnames'

import { Box, Table, Field, Toggle, Drawer } from '@components'
import styles from './Talents.css'

export default () => (
  <Box id="talents" label="Talents">
    <Table repeat id="talents">
      <Toggle id="talent-unlocked" />
      <span className={styles.talent}>
        <span className={styles.label} name="attr_talent-name">
          New Talent
        </span>
        <span className={styles.text} name="attr_talent-desc">
          Edit the description below and then click the "lock" icon.
        </span>
        <Toggle id="talent-edit" value="hidden" />
      </span>

      <Drawer id="talent-desc" toggle="talent-edit">
        <Field id="talent-name" placeholder="Talent Name" />
        <Field type="textbox" id="talent-desc" />
        <Toggle id="talent-edit" value="hidden" />
      </Drawer>
    </Table>
  </Box>
)
