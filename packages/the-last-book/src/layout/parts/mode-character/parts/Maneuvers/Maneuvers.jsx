import React from 'react'

import { Box, FieldGroup, Field } from 'swordsmith'
import { buildRollTemplate } from '@scripts/util/BuildRollTemplateTag'

import styles from './Maneuvers.css'

const Move = ({ id, label, type, parent, disabled, ...props }) => (
  <FieldGroup id={id} label={label} className={styles.maneuver}>
    <Field id={`${id}-level`} label="Level" />
    <Field
      id={`${id}-parent`}
      label="Par."
      value={parent && parent}
      displayOnly={disabled ? true : null}
    />
    <Field
      id={id}
      label="Rat."
      roll={buildRollTemplate('TLBattackRoll', {
        name: '@{character-name}',
        move: label,
        rolltype: 'Attribute',
        [`${type.toLowerCase()}`]: `[[2d6+(@{${id}})+(?{${type} modifier|+0})]]`,
        note: `?{Note}`,
      })}
      /**
       *  roll={`&{template:TLBattackRoll}
       *  {{name=@{character-name}}} {{move=${label}}}
       * {{${type.toLowerCase()}=[[2d6+(@{${id}})+(?{${type} modifier|+0})]]}}
       *  {{note=?{Note}}}`}
       */
    />
  </FieldGroup>
)

export default (props) => (
  <Box id="maneuvers" label="Maneuvers">
    <Move id="swing" label="Swing" type="Attack" />
    <Move id="thrust" label="Thrust" type="Attack" />
    <Move id="throw" label="Throw" type="Attack" />
    <Move id="shoot" label="Shoot" type="Attack" />
    <Move id="parry" label="Parry" type="Defense" />
    <Move id="block" label="Block" type="Defense" />
    <Move id="evade" label="Evade" type="Defense" parent="SP" disabled />
  </Box>
)
