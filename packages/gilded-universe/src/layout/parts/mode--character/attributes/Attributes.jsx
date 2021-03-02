import React from 'react'
import c from 'classnames'

import styles from './Attributes.css'

import { Group, Button, Field, Toggle } from '@components'

const Attr = ({ id, label, ...props }) => (
  <div className={c(styles.attr, styles[`attr-${id}`])}>
    <span className={styles.label}>{label}</span>
    <Field id={`${id}`} />
    <Toggle id={`marked-attr`} value={id} title="Mark as 'Key Attribute'" />
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
      <Field
        id="health"
        label="Health"
        hasMax
        tooltip="Health = 10 + STR; Click label to restore to full"
        action="restore-health"
      />
      <div>
        <Field id="armor" label="Armor" />
        <Field id="defense" label="Def." />
      </div>
      <Field
        id="vigor"
        label="Vigor"
        hasMax
        tooltip="Vigor = STR + DEX; Click label to restore to full"
        action="restore-vigor"
      />
      <Field
        id="resolve"
        label="Resolve"
        hasMax
        tooltip="Resolve = INT + WIT; Click label to restore to full"
        action="restore-resolve"
      />
      <Field
        id="reaction"
        label="Reaction"
        tooltip="Reaction = DEX + WIT"
        roll={`&{template:reactionRoll} {{name=@{character-name}}} {{title=Reaction}} {{dice=[[@{reaction}-@{reaction}d6>2f<@{dex}scs=1cf=0]]}} `}
      />
      <Button
        hidden
        id="initiative"
        className="tokenaction"
        roll={`&{template:reactionRoll} {{name=@{character-name}}} {{shortName=@{character_name}}} {{title=Initiative}} {{initiative=[[1]]}} {{dice=[[[[@{reaction}+@{initiative-bonus}]]-[[@{reaction}+@{initiative-bonus}]]d6>2f<@{dex}scs=1cf=0 &{tracker}]]}} `}
      />
      <Field hidden id="initiative-bonus" value="0" />
      <Field id="speed" label="Speed" tooltip="Speed = 30 ft." />
    </Group>
  </div>
)
