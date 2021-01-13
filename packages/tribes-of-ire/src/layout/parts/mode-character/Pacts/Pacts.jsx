import React from 'react'
import c from 'classnames'

import { Box, Table, Field, Toggle, Meter, Drawer } from '@components'
import styles from './Pacts.css'

export default () => (
  <Box id="pacts" label="Spirit Pacts">
    <p>
      You have gained the powers listed below. If a pact's debt fills up, lose
      it (until restored).
    </p>
    <Table repeat id="pacts">
      <Toggle id="pact-unlocked" />
      <div className={styles.pact}>
        <span className={styles.label} name="attr_pact-name">
          New Pact
        </span>
        <span className={styles.text} name="attr_pact-desc">
          Edit the description below and then click the "lock" icon.
        </span>
        <Toggle id="pact-edit" value="hidden" />
        <Meter id="pact-debt" label="Debt" size="9" max="1" />
      </div>

      <Drawer id="pact-desc" toggle="pact-edit">
        <Field id="pact-name" placeholder="Pact Name" />
        <Field type="textbox" id="pact-desc" />
        <Field id="pact-debt_max" label="Max Debt" />
        <Toggle id="pact-edit" value="hidden" />
      </Drawer>
    </Table>
  </Box>
)
