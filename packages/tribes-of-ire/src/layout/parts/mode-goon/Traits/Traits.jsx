import React from 'react'
import c from 'classnames'

import { Box, Field, Button, Meter, Toggle, MultiToggle } from '@components'
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

const Skill = ({ id, label, ...props }) => (
  <div className={c(styles.skill, styles[`skill-${id}`])}>
    <Field
      hidden
      id={`${id}_formula`}
      value=" {{?{Bonus Dice|0,zerodice=[[d6]]|1,dice=[[d6]]|2,dice=[[d6]]&#44; [[d6]]|3,dice=[[d6]]&#44; [[d6]]&#44; [[d6]]|4,dice=[[d6]]&#44; [[d6]]&#44; [[d6]]&#44; [[d6]]|5,dice=[[d6]]&#44; [[d6]]&#44; [[d6]]&#44; [[d6]]&#44; [[d6]]|6,dice=[[d6]]&#44; [[d6]]&#44; [[d6]]&#44; [[d6]]&#44; [[d6]]&#44; [[d6]]|-1,zerodice=[[d6]]|-2,zerodice=[[d6]]|-3,zerodice=[[d6]]}}}"
    />
    <Button
      id={`${id}`}
      roll={`&{template:abilityRoll} {{name=@{character-name}}} {{title=${label}}} ?{Trait|Alert,{{trait_die=[[@{alert}]]&#125&#125 {{title=Alert&#125&#125 {{marked=[[@{alert-marked}]]&#125&#125|Crafty,{{trait_die=[[@{crafty}]]&#125&#125 {{title=Crafty&#125&#125 {{marked=[[@{crafty-marked}]]&#125&#125|Cunning,{{trait_die=[[@{cunning}]]&#125&#125 {{title=Cunning&#125&#125 {{marked=[[@{cunning-marked}]]&#125&#125|Daring,{{trait_die=[[@{daring}]]&#125&#125 {{title=Daring&#125&#125 {{marked=[[@{daring-marked}]]&#125&#125|Vicious,{{trait_die=[[@{vicious}]]&#125&#125 {{title=Vicious&#125&#125 {{marked=[[@{vicious-marked}]]&#125&#125|Weird,{{trait_die=[[@{weird}]]&#125&#125 {{title=Weird&#125&#125 {{marked=[[@{weird-marked}]]&#125&#125} @{${id}_formula}`}
    >
      <span className={styles.label}>{label}</span>
    </Button>
    <Meter id={`${id}`} size={4} value="0" />
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
      <Skill id="aptitude" label="Aptitude" />

      <h3>Other Stats</h3>
      <Field
        id="speed"
        label="Speed"
        value="3"
        roll={`&{template:speedRoll} {{name=@{character-name}}} {{title=Speed}} {{roll=[[@{speed}d6kh1+[[@{speed}+(?{Bonus|0})+(0.@{speed})]] &{tracker}]]}}`}
        tooltip="Roll for initiative"
      />
      <Field id="armor" label="Armor" value="0" />
      <Field id="move" label="Movement" value="30 ft." />
      <Field id="move_max" placeholder="..." />
    </div>
  </Box>
)
