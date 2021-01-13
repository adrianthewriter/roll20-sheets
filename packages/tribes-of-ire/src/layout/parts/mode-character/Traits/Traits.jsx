import React from 'react'
import c from 'classnames'

import { Box, Field, Button, Toggle, MultiToggle } from '@components'
import { buildRollTemplate } from '@scripts/util/BuildRollTemplateTag'
import styles from './Traits.css'

const Trait = ({ id, label, ...props }) => (
  <div className={c(styles.trait, styles[`trait-${id}`])}>
    <Button
      id={`${id}`}
      roll={`&{template:abilityRoll} {{name=@{character-name}}} {{title=${label}}} {{trait_die=[[@{${id}}]]}} {{marked=[[@{${id}-marked}]]}} `}
    >
      <span className={styles.label}>{label}</span>
    </Button>
    <MultiToggle
      id={`${id}`}
      set={[
        { id: 'd4', label: '', checked: true },
        { id: 'd6', label: 'D6' },
        { id: 'd8', label: 'D8' },
        { id: 'd10', label: 'D10' },
        { id: 'd12', label: 'D12' },
      ]}
    />
    <Toggle id={`${id}-marked`} value="1" />
  </div>
)

export default () => (
  <Box id="traits" label="Traits">
    <Trait id="alert" label="Alert" />
    <Trait id="crafty" label="Crafty" />
    <Trait id="cunning" label="Cunning" />
    <Trait id="daring" label="Daring" />
    <Trait id="vicious" label="Vicious" />
    <Trait id="weird" label="Weird" />

    <div className={styles.stats}>
      <Field
        id="speed"
        label="Speed"
        value="3"
        roll={`&{template:speedRoll} {{name=@{character-name}}} {{title=Speed}} {{roll=[[@{speed}d6kh1+[[@{speed}+(?{Bonus|0})+(0.@{speed})]] &{tracker}]]}}`}
        tooltip="Roll for initiative"
      />
      <Field id="armor" label="Armor" value="0" />
      <Field id="move" label="Movement" value="30 ft." />
    </div>
  </Box>
)
