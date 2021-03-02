import React from 'react'
import c from 'classnames'

import styles from './Skills.css'

import { Group, Field } from '@components'

const Skill = ({ id, label, attr, ...props }) => (
  <>
    <Field
      hidden
      id={`${id}_formula`}
      value={`{{dice=[[[[1+(?{Bonus Dice|0})-?{Burn|0}]]-[[2+(?{Bonus Dice|0})]]d6dl[[1+?{Burn|0}]]>2f<@{${attr}}scs=1cf=0]]}} {{zerodice=1}}`}
    />
    <Field
      id={id}
      label={`${label} (${attr.toUpperCase()})`}
      roll={`&{template:skillRoll} {{name=@{character-name}}} {{title=${label} (${attr.toUpperCase()})}}  @{${id}_formula} `}
    />
  </>
)

export default () => (
  <Group id="skills" label="Skills">
    <div>
      <Skill id="brute-force" label="Brute Force" attr="str" />
      <Skill id="close-combat" label="Close Combat" attr="str" />
      <Skill id="machinery" label="Machinery" attr="str" />
      <Skill id="stamina" label="Stamina" attr="str" />
    </div>

    <div>
      <Skill id="mobility" label="Mobility" attr="dex" />
      <Skill id="piloting" label="Piloting" attr="dex" />
      <Skill id="ranged-combat" label="Ranged Combat" attr="dex" />
      <Skill id="tinkering" label="Tinkering" attr="dex" />
    </div>

    <div>
      <Skill id="history" label="History" attr="int" />
      <Skill id="medicine" label="Medicine" attr="int" />
      <Skill id="science" label="Science" attr="int" />
      <Skill id="technology" label="Technology" attr="int" />
    </div>

    <div>
      <Skill id="command" label="Command" attr="wit" />
      <Skill id="manipulation" label="Manipulation" attr="wit" />
      <Skill id="observation" label="Observation" attr="wit" />
      <Skill id="survival" label="Survival" attr="wit" />
    </div>
  </Group>
)
