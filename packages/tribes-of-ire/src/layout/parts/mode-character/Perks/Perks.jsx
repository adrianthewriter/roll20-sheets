import React from 'react'
import c from 'classnames'

import { Box, Field, Button, Toggle, Meter, MultiToggle } from '@components'
import { buildRollTemplate } from '@scripts/util/BuildRollTemplateTag'
import styles from './Perks.css'

const Perk = ({ id, label, ranks = 1, text, ...props }) => (
  <div className={c(styles.perk, styles[`perk-${id}`])}>
    {Array.from(Array(parseInt(ranks)), (e, i) => i + 1).map((i) => (
      <>
        <Toggle id={`${id}-${i}`} />
      </>
    ))}
    <span className={styles.label}>{label}</span>
    <span>{text}</span>
  </div>
)

export default () => (
  <Box id="perks" label="Perks" hasToggle>
    <Perk
      id="growth"
      label="Growth"
      ranks="3"
      text="Increase a trait by one die size (max D12)."
    />
    <Perk
      id="readyness"
      label="Readyness"
      ranks="3"
      text="Increase your speed by +1."
    />
    <Perk
      id="quickness"
      label="Quickness"
      ranks="3"
      text="Increase your movement by +5 ft."
    />
    <Perk
      id="training"
      label="Training"
      text="Gain two talents this Advance instead of only one. "
    />
    <Perk
      id="gift"
      label="Gift"
      text="Create a new special tool and add it to your gear."
    />

    <Perk
      id="boon"
      label="Boon"
      text="If you die, don't. Then, clear this perk."
    />
  </Box>
)
