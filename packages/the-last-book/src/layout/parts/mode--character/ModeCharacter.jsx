import React from 'react'
import c from 'classnames'

import styles from './ModeCharacter.css'

import { Sheet, TabGroup, Section, Button } from '@components'
import { Header, Attributes, ResourcePools, Advantages, Skills } from './index'

export default () => (
  <Sheet mode="character">
    <Header />
    <Section id="side">
      <Attributes />
    </Section>
    <Section id="main">
      <ResourcePools />
      <TabGroup id="character" toggle="character-tabs" tab="details">
        <Section id="details" label="Advantages &amp; Skills">
          <Advantages />
          <Skills />
        </Section>

        <Section id="equipment" label="Equipment">
          Equipment
        </Section>
        <Section id="notes" label="Notes">
          Notes
        </Section>

        <Section id="settings" label="Settings">
          Settings
        </Section>

        <Section id="warrior" label="Warrior" group="Advanced" show>
          Manuevers Techniques
        </Section>
        <Section id="conqueror" label="Conqueror" group="Advanced">
          Conqueror Stuff
        </Section>
        <Section id="alchemist" label="Alchemist" group="Advanced">
          Alchemist Stuff
        </Section>
        <Section id="templar" label="Templar" group="Advanced">
          Templar Stuff
        </Section>
        <Section id="lotus-eater" label="Lotus Eater" group="Advanced">
          Lotus Eater Stuff
        </Section>
        <Section id="shaman" label="Shaman" group="Advanced">
          Shaman Stuff
        </Section>
      </TabGroup>
    </Section>
  </Sheet>
)
