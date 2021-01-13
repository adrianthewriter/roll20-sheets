import React from 'react'
import c from 'classnames'

import { Box, Table, Drawer, Field, Meter, Toggle } from '@components'
import styles from './Status.css'

const Condition = ({ id, penalty = false, ...props }) => (
  <div className={c(styles.condition, styles[`condition-${id}`])}>
    <Field id={`condition-${id}`} label={id} />
    {penalty && <span className={styles.penalty}>{penalty}</span>}
  </div>
)

export default () => (
  <>
    <Field hidden id="sheet_npctype" value="multiple" />
    <Box id="status" label="Survival" className={styles.uniquenpc}>
      <Meter id="healing-clock" size="4" />

      <h3>
        Moderate <span>(No Penalty)</span>
      </h3>
      <Condition id="1" />
      <Condition id="2" />
      <Condition id="3" />

      <h3>
        Serious <span>(-1 Aptitude each)</span>
      </h3>
      <Condition id="4" />
      <Condition id="5" />
      <Condition id="6" />

      <h3>
        Critical <span>(Cripple)</span>
      </h3>
      <Condition id="7" />
      <Condition id="8" />
      <Condition id="9" />

      <h3>Deadly</h3>
      <Condition id="10" />
    </Box>

    <Box id="status" label="Goons" className={styles.multiplenpcs}>
      <Meter id="group-morale" label="Morale" size="4" />

      <Table repeat id="goons">
        <div>
          <Field id="goon-name" label="Name" />
          <Meter id="goon-rank" size="4" value="0" />
        </div>
        <Field hidden id="goon-rank" />
        <Meter unlinked id="goon-wounds" label="Wounds" size="16" />
        <Field type="textbox" id="goon-notes" label="Notes" />
      </Table>
    </Box>
  </>
)
