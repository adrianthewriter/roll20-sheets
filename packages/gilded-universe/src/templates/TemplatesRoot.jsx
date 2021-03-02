import React from 'react'

import ReactionRoll from './ReactionRoll/ReactionRoll'
import SkillRoll from './SkillRoll/SkillRoll'
import MoneyRoll from './StartingMoneyRoll/StartingMoneyRoll'

const Wrapper = (props) => {
  return React.Children.map(props.children, (child) => (
    <div className="message general">{child}</div>
  ))
}

export default () => (
  <Wrapper>
    <ReactionRoll />
    <SkillRoll />
    <MoneyRoll />
  </Wrapper>
)
