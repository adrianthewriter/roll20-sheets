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
  <Box id="status" label="Survival">
    <Meter id="healing-clock" size="4" />
    <p>Track your conditions below. Seek healing to remove conditions...</p>

    <h3>
      Moderate <span>(No Penalty)</span>
    </h3>
    <Condition id="1" />
    <Condition id="2" />
    <Condition id="3" />

    <h3>
      Serious <span>(-1 Skill each)</span>
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
  </Box>
)
