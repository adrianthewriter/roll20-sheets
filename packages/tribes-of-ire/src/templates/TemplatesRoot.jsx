import React from 'react'

import AbilityRoll from './AbilityRoll/AbilityRoll'
import SpeedRoll from './SpeedRoll/SpeedRoll'

const Wrapper = (props) => {
  return React.Children.map(props.children, (child) => (
    <div class="message general">{child}</div>
  ))
}

export default () => (
  <Wrapper>
    <AbilityRoll />
    <SpeedRoll />
  </Wrapper>
)
