/**
 * Create a onChange handler for when a Skill's level is changed.
 */
import { lookup } from './data'

export default (sheet) => {
  Object.entries(lookup('skills')).forEach(([skill, attr]) => {
    sheet.listen(`change:${skill}`).then(({ e, setAttrs }) => {
      // Keep Skill levels between 0 and 10, and clear the field on level 0
      let level = parseInt(e.newValue)
      if (level > 10) level = 10
      if (level < 1) level = 0

      setAttrs({
        [skill]: level ? level : '',
      })

      // Update the 'skill_formula' field
      const buildRollFormula = (attr, dice) => {
        if (dice > 0)
          return `{{dice=[[[[${dice}+(?{Bonus Dice|0})-?{Burn|0}]]-[[${dice}+(?{Bonus Dice|0})]]d6dl?{Burn|0}>2f<@{${attr}}scs=1cf=0]]}}`
        else
          return `{{dice=[[[[1+(?{Bonus Dice|0})-?{Burn|0}]]-[[2+(?{Bonus Dice|0})]]d6dl[[1+?{Burn|0}]]>2f<@{${attr}}scs=1cf=0]]}} {{zerodice=1}}`
      }

      setAttrs({
        [`${skill}_formula`]: buildRollFormula(attr, e.newValue || '0'),
      })
    })
  })
}
