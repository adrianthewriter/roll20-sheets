import React from 'react'
import c from 'classnames'

import styles from './Attributes.css'

import { Group, Button, Field, Toggle } from '@components'

const Attr = ({ id, label, ...props }) => (
  <div className={c(styles.attr, styles[`attr-${id}`])}>
    <span className={styles.label}>{label}</span>
    <Field id={`${id}`} />
    <Toggle id={`${id}-marked`} value="1" title="Mark as 'Key Attribute'" />
  </div>
)

export default () => (
  <div>
    <Group id="attrs" label="Attributes">
      <Attr id="str" label="STR" />
      <Attr id="dex" label="DEX" />
      <Attr id="int" label="INT" />
      <Attr id="wit" label="WIT" />
    </Group>

    <Group id="stats" label="Other Stats" flip>
      <Field id="health" label="Health" hasMax />
      <div>
        <Field id="armor" label="Armor" />
        <Field id="defense" label="Def." />
      </div>
      <Field id="vigor" label="Vigor" hasMax />
      <Field id="resolve" label="Resolve" hasMax />
      <Field
        id="reaction"
        label="Reaction"
        roll={`&{template:reactionRoll} {{name=@{character-name}}} {{title=Reaction}} {{dice=[[@{reaction}-@{reaction}d6>2f<@{dex}scs=1cf=0]]}} `}
      />
      <Field id="speed" label="Speed" />
    </Group>
  </div>
)
