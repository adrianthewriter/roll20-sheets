import React from 'react'
import c from 'classnames'

import { Box, Field, Button, Toggle, Meter, MultiToggle } from '@components'
import { buildRollTemplate } from '@scripts/util/BuildRollTemplateTag'
import styles from './Skills.css'

const Skill = ({ id, label, ...props }) => (
  <div className={c(styles.skill, styles[`skill-${id}`])}>
    <Field
      hidden
      id={`${id}_formula`}
      value=" {{?{Bonus Dice|0,zerodice=[[d6]]|1,dice=[[d6]]|2,dice=[[d6]]&#44; [[d6]]|3,dice=[[d6]]&#44; [[d6]]&#44; [[d6]]|4,dice=[[d6]]&#44; [[d6]]&#44; [[d6]]&#44; [[d6]]|5,dice=[[d6]]&#44; [[d6]]&#44; [[d6]]&#44; [[d6]]&#44; [[d6]]|6,dice=[[d6]]&#44; [[d6]]&#44; [[d6]]&#44; [[d6]]&#44; [[d6]]&#44; [[d6]]|-1,zerodice=[[d6]]|-2,zerodice=[[d6]]|-3,zerodice=[[d6]]}}}"
    />
    <Button
      id={`${id}`}
      roll={`&{template:abilityRoll} {{name=@{character-name}}} {{title=${label}}} ?{Trait|Alert,{{trait_die=[[@{alert}]]&#125&#125 {{trait=Alert&#125&#125 {{marked=[[@{alert-marked}]]&#125&#125|Crafty,{{trait_die=[[@{crafty}]]&#125&#125 {{trait=Crafty&#125&#125 {{marked=[[@{crafty-marked}]]&#125&#125|Cunning,{{trait_die=[[@{cunning}]]&#125&#125 {{trait=Cunning&#125&#125 {{marked=[[@{cunning-marked}]]&#125&#125|Daring,{{trait_die=[[@{daring}]]&#125&#125 {{trait=Daring&#125&#125 {{marked=[[@{daring-marked}]]&#125&#125|Vicious,{{trait_die=[[@{vicious}]]&#125&#125 {{trait=Vicious&#125&#125 {{marked=[[@{vicious-marked}]]&#125&#125|Weird,{{trait_die=[[@{weird}]]&#125&#125 {{trait=Weird&#125&#125 {{marked=[[@{weird-marked}]]&#125&#125} @{${id}_formula}`}
    >
      <span className={styles.label}>{label}</span>
    </Button>
    <Meter id={`${id}`} size={4} value="0" />
  </div>
)

export default () => (
  <Box id="skills" label="Skills">
    <Skill id="awareness" label="Awareness" />
    <Skill id="coordination" label="Coordination" />
    <Skill id="knowledge" label="Knowledge" />
    <Skill id="logic" label="Logic" />
    <Skill id="prowess" label="Prowess" />
    <Skill id="resistance" label="Resistance" />
    <Skill id="speech" label="Speech" />
    <Skill id="stealth" label="Stealth" />

    <Skill id="unarmed" label="Bare Hands" />
    <Skill id="melee" label="Melee Weapons" />
    <Skill id="ranged" label="Ranged Weapons" />
    <Skill id="magic" label="Magic/Medicine" />
  </Box>
)
