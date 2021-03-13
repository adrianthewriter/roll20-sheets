/**
 * Create a onChange handler for updating the 'Other Stats'.
 */
import { lookup } from './data'

export default (sheet) => {
  sheet
    .listen(['change:str', 'change:dex', 'change:int', 'change:wit'])
    .listen(['change', 'remove'], 'talents')
    .getAttrs([
      'str',
      'dex',
      'int',
      'wit',
      'health',
      'vigor',
      'resolve',
      'reaction',
      'initiative-bonus',
      'speed',
      'defense',
    ])
    .getFields(['talent'], 'talents')
    .then(({ e, attrSet, getAllFields, setAttrs }) => {
      // Set up the 'update' object
      let update = {}
      let str = parseInt(attrSet['str']) || 0
      let dex = parseInt(attrSet['dex']) || 0
      let int = parseInt(attrSet['int']) || 0
      let wit = parseInt(attrSet['wit']) || 0

      // Create a flag on 'talent' change
      const match = e.sourceAttribute.match(/repeating_talents_(-.+)_talent/i)
      const talentChanged =
        (match ? (e.previousValue !== e.newValue ? true : false) : false) ||
        (e.removedInfo ? true : false)

      getAllFields('talents', (fieldSet) => {
        const talents = fieldSet
          ? fieldSet.map(({ talent }) => talent.toLowerCase())
          : []
        const talentBonuses = Object.entries(lookup('talents'))
          .map(([talent, bonuses]) => {
            return bonuses.map(([key, bonus]) =>
              talents.includes(talent.toLowerCase()) ? [key, bonus] : [key, 0]
            )
          })
          .filter((x) => x)
          .flat()

        // Function to sum stat bonuses
        const sumBonuses = (stat) => {
          let totalBonus = [...talentBonuses].reduce((acc, [key, bonus]) => {
            if (stat === key) {
              return acc + parseInt(bonus)
            }
            return acc
          }, 0)
          return totalBonus
        }

        // Find the stat bonuses
        const healthBonus = sumBonuses('health')
        const vigorBonus = sumBonuses('vigor')
        const resolveBonus = sumBonuses('resolve')
        const reactionBonus = sumBonuses('reaction')
        const initiativeBonus = sumBonuses('initiative')
        const speedBonus = sumBonuses('speed')
        const defenseBonus = sumBonuses('defense')

        // Update Health
        if (e.sourceAttribute === 'str' || healthBonus || talentChanged) {
          let curHealth = parseInt(attrSet['health']) || 0
          let maxHealth = str ? 10 + str + healthBonus : ''
          update['health_max'] = maxHealth
          update['health'] =
            curHealth && curHealth <= maxHealth ? curHealth : maxHealth
        }

        // Update Vigor
        if (
          e.sourceAttribute === 'str' ||
          e.sourceAttribute === 'dex' ||
          vigorBonus ||
          talentChanged
        ) {
          let curVigor = parseInt(attrSet['vigor']) || 0
          let maxVigor = str && dex ? str + dex + vigorBonus : ''
          update['vigor_max'] = maxVigor
          update['vigor'] =
            curVigor && curVigor <= maxVigor ? curVigor : maxVigor
        }

        // Update Resolve
        if (
          e.sourceAttribute === 'int' ||
          e.sourceAttribute === 'wit' ||
          resolveBonus ||
          talentChanged
        ) {
          let curResolve = parseInt(attrSet['resolve']) || 0
          let maxResolve = int && wit ? int + wit + resolveBonus : ''
          update['resolve_max'] = maxResolve
          update['resolve'] =
            curResolve && curResolve <= maxResolve ? curResolve : maxResolve
        }

        // Update Reaction
        if (
          true ||
          e.sourceAttribute === 'dex' ||
          e.sourceAttribute === 'wit' ||
          reactionBonus ||
          talentChanged
        ) {
          let reaction = int && wit ? int + wit + reactionBonus : ''
          update['reaction'] = reaction ? reaction : ''
        }

        // Update Initiative
        if (true || initiativeBonus || talentChanged) {
          let initiative = parseInt(initiativeBonus) || 0
          update['initiative-bonus'] = initiative ? initiative : 0
        }

        // Update Speed
        if (true || speedBonus || talentChanged) {
          let speed = 30 + speedBonus
          update['speed'] = speed ? `${speed} ft.` : '30 ft.'
        }

        // Update Defense
        if (true || defenseBonus || talentChanged) {
          let defense = parseInt(defenseBonus) || 0
          update['defense'] = defense ? 1 + defense : 1
        }

        // Save the update
        setAttrs(update, () => {
          console.log('Stats updated')
        })
      })
    })
}
