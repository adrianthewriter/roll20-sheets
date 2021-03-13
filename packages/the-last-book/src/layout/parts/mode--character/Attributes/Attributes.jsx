import React from 'react'
import c from 'classnames'

import styles from './Attributes.css'
import { Box, Field, Button } from '@components'

const Attribute = ({ id, label, skill, ...props }) => (
  <div className={styles.attribute}>
    <h3>
      {label} ({id.toUpperCase()}):
    </h3>
    <div className={styles.container}>
      <Field id={id} label="Level" value="10" />
      <Field
        displayOnly
        id={`${id}_max`}
        label="Chance"
        value="50"
        roll={`&{template:attribute} {{fullname=@{character-name}}} {{nickname=@{character_name}}} {{label=${label}}} @{${id}_formula} {{note=?{note}}}`}
      />
      <Field
        hidden
        id={`${id}_formula`}
        value={`{{roll=[[d100cs<3cf>99]]}} {{chance=@{${id}|max}}} @{${skill}_formula}`}
      />
    </div>
    {skill && (
      <>
        <Field hidden id={`${skill.toLowerCase()}`} value="0" />
        <Field hidden id={`${skill.toLowerCase()}_max`} value="0" />
        <Field
          hidden
          id={`${skill.toLowerCase()}_formula`}
          value={`?{Use ${skill} instead?|No,|Yes,{{label=${skill}&#125;&#125; {{roll=[[d100cs<3cf>99]]&#125;&#125; {{chance=@{${skill}|max}&#125;&#125;}`}
        />
      </>
    )}
  </div>
)

const Stat = ({ id, label, value, roll, ...props }) => (
  <div className={styles.stat} title={props.tooltip}>
    <Field
      displayOnly
      id={id}
      label={label}
      value={value}
      roll={
        roll &&
        `&{template:attribute} {{fullname=@{character-name}}} {{nickname=@{character_name}}} {{label=${label}}} @{${id}_formula} {{note=?{note}}}`
      }
    />
    {roll && (
      <Field
        hidden
        id={`${id}_formula`}
        value="{{roll=[[d100cs<3cf>99]]}} {{chance=@{${id}|max}}}"
      />
    )}
  </div>
)

export default () => (
  <>
    <Box id="attributes" label="Attributes">
      <Attribute id="iq" label="Intelligence" skill="Focus" />
      <Attribute id="wl" label="Willpower" skill="Determination" />
      <Attribute id="aw" label="Awareness" skill="Survey" />
      <Attribute id="st" label="Strength" skill="Lift" />
      <Attribute id="ag" label="Agility" skill="Leap" />
      <Attribute id="sm" label="Stamina" skill="Tolerance" />
    </Box>

    <Box id="derived" className={styles.derived}>
      <h3>Derived Stats:</h3>
      <Stat
        id="stun"
        label="Stun"
        roll
        value="80"
        tooltip="Stun = 4 × (WL + SM)"
      />
      <Stat
        id="con"
        label="Consciousness"
        roll
        value="90"
        tooltip="Con. = (WL × 3) + (SM × 6)"
      />
      <Stat
        id="react"
        label="Reaction"
        roll
        value="60"
        tooltip="Reaction = (AW × 3) + (AG × 2) + IQ"
      />
      <Stat id="sp" label="Speed (SP)" value="5" tooltip="Speed = AG ÷ 2" />
    </Box>
  </>
)
