import React from 'react'
import c from 'classnames'

import styles from './ModeCharacter.css'

import {
  Sheet,
  Section,
  Box,
  Group,
  Table,
  Button,
  Field,
  Toggle,
} from '@components'
import {
  Header,
  Attributes,
  Lifepaths,
  Skills,
  Injuries,
  Augments,
  Equipment,
  Notes,
  Talents,
} from './index.js'

export default () => (
  <Sheet mode="character">
    <Header />
    <Section id="main">
      <Attributes />
      <Lifepaths />
      <Skills />
      <Injuries />
      <Augments />
      <Equipment />
      <Notes />
    </Section>

    <Section id="side">
      <Talents />
    </Section>
  </Sheet>
)
