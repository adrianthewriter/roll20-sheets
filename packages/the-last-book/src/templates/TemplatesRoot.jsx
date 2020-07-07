import React from 'react'

import AbilityRoll from './AbilityRoll/AbilityRoll'
import AttackRoll from './AttackRoll/AttackRoll'
import DamageRoll from './DamageRoll/DamageRoll'

const Wrapper = (props) => {
  return React.Children.map(props.children, (child) => (
    <div class="message general">{child}</div>
  ))
}

export default () => (
  <Wrapper>
    <AbilityRoll />
    <AttackRoll />
    <DamageRoll />
  </Wrapper>
)
