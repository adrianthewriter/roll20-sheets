/**
 * Create a onChange handler for tracking spent XP.
 */
import { lookupKeys } from './data'

export default (sheet) => {
  // List things to listen for
  const fields = {
    // Skill List
    skills: lookupKeys('skills'),

    // Repeating Tables
    tables: ['lifepaths', 'talents'],
  }

  const listenFor = [].concat(
    fields.skills.map((f) => `change:${f}`),
    fields.tables.map((f) => `change:repeating_${f}`),
    fields.tables.map((f) => `remove:repeating_${f}`),
    ['change:character-xp_max']
  )

  sheet
    .listen(listenFor)
    .getAttrs(['character-xp_max'])
    .getAttrs(fields.skills)
    .getFields('lifepath', 'lifepaths')
    .getFields('talent', 'talents')
    .then(({ e, attrSet, getAllFields, setAttrs }) => {
      // These are nested because they need to be to work :(
      getAllFields('lifepaths', (fieldSet) => {
        let lifepaths = fieldSet ? fieldSet.length : 0 // Save for later

        getAllFields('talents', (fieldSet) => {
          let talents = fieldSet ? fieldSet.length : 0 // Save for later

          // Set the initial XP values
          let skillXP = 0
          let lifepathXP = 0
          let talentXP = 0

          // Add up the XP from Skills
          let skillSet = Object.fromEntries(
            Object.entries(attrSet).filter(
              ([key]) => key !== 'character-xp_max'
            )
          )

          let totalSkills = 0 - lifepaths * 2
          Object.values(skillSet).forEach((skill) => {
            totalSkills += parseInt(skill) || 0
          })
          skillXP = totalSkills > 0 ? totalSkills * 25 : 0

          // Adjust the XP for Lifepaths
          lifepathXP += lifepaths > 3 ? 100 * (lifepaths - 3) : 0

          // Adjust the XP for Talents
          talentXP += 25 * talents

          // Calculate and save the total XP!
          let totalEarnedXP = attrSet['character-xp_max']
          let remainigXP = totalEarnedXP - (skillXP + lifepathXP + talentXP)

          setAttrs({
            ['character-xp']: remainigXP,
          })
        })
      })
    })
}
