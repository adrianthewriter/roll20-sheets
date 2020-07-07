import React from 'react'
import c from 'classnames'

import { Box, FieldGroup, Field, Button } from 'swordsmith'
import { buildRollTemplate } from '@scripts/util/BuildRollTemplateTag'

import styles from './Attributes.css'

const Attribute = ({ id, label, ...props }) => (
  <div className={c(styles.attribute, props.className) || null}>
    <h3>
      {label} ({id.toUpperCase()}):
    </h3>
    <FieldGroup id={id}>
      <Field id={id} label="Level" />
      <Field
        id={`${id}_max`}
        label="Chance"
        roll={buildRollTemplate('TLBabilityRoll', {
          name: '@{character-name}',
          title: label,
          rolltype: 'Attribute',
          roll: `[[d100cs<3cf>99]]`,
          chance: `@{${id}|max}`,
          note: `?{Note}`,
        })}
        // roll={`&{template:TLBskillRoll} {{name=@{character-name}}} {{skill=${label}}} {{roll=[[d100cs<3cf>99]]}} {{chance=@{${id}|max}}} {{note=?{Note}}}`}
      />
    </FieldGroup>
  </div>
)

const Stat = ({ id, label, roll, ...props }) => (
  <div className={styles.statblock}>
    {roll ? (
      <Button
        id={id}
        roll={buildRollTemplate('TLBabilityRoll', {
          name: '@{character-name}',
          title: label,
          rolltype: 'Resistance',
          roll: `[[d100cs<3cf>99]]`,
          chance: `@{${id}}`,
          note: `?{Note}`,
        })}
      >
        {label}
      </Button>
    ) : (
      <span>{label}</span>
    )}
    <Field id={id} {...props} />
  </div>
)

export default (props) => (
  <>
    <Box id="attributes" label="Attributes">
      <Attribute id="iq" label="Intelligence" />
      <Attribute id="wl" label="Willpower" />
      <Attribute id="aw" label="Awareness" />
      <Attribute id="st" label="Strength" />
      <Attribute id="ag" label="Agility" />
      <Attribute id="sm" label="Stamina" />
    </Box>

    <Box id="derived" className={styles.derived}>
      <h3>Derived Stats:</h3>
      <Stat id="stun" label="Stun" roll />
      <Stat id="con" label="Con." roll />
      <Stat id="react" label="Reaction" roll />
      <Stat id="sp" label="Speed (SP)" />
    </Box>
  </>
)
