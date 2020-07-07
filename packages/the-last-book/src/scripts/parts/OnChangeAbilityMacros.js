const buildRollTemplate = (id, propsObj = null) => {
  if (typeof id === 'object') {
    propsObj = id
    id = false
  }
  const propsArray = Object.entries(propsObj).map(([key, val]) => {
    return id ? `{{${key}=${val}}}` : `{{${key}=${val}&#125;&#125;`
  })
  return id
    ? `&{template:${id}} ${propsArray.filter((x) => x).join(' ')}`
    : propsArray.filter((x) => x).join(' ')
}

const buildRollQuery = (query, optsObj) => {
  const optsArray = Object.entries(optsObj).map(([key, val]) => {
    return `|${key}, ${val}`
  })
  return `?{${query} ${optsArray.filter((x) => x).join(' ')}}`
}

export default (sheet) => {
  sheet
    .listen(['change:prayer-usemacros-toggle'], 'prayers')
    .getAttrs(['character_name'])
    .getFields(['prayer-name', 'prayer-parent'], 'prayers')
    .getFieldsFromAllRows(['skill-name', 'skill-id'], 'skills')
    .then(({ attrSet, fieldSet, setAttrs }) => {
      const charName = attrSet['character_name']
      const techName = fieldSet.prayers[0]['prayer-name']
      const techParent = fieldSet.prayers[0]['prayer-parent'].toLowerCase()
      const skillObj = fieldSet.skills.find((skill) => {
        return skill['skill-name']
          .toLowerCase()
          .includes(techParent.toLowerCase())
      })
      const skillId = skillObj && skillObj['skill-id']
      const skillChance = skillId
        ? `[[@{repeating_skills_${skillId}_skill-chance}]]`
        : `???`

      console.log(skillObj, skillId)

      let attackMacro, damageMacro

      attackMacro =
        buildRollTemplate('TLBabilityRoll', {
          name: `@{character-name}`,
          title: techName,
          roll: `[[d100cs<3cf>99]]`,
          rolltype: techParent,
          chance: skillChance,
          note: `No macro found. Create an ability named "Move--${techName.replace(
            /\s/g,
            '-'
          )}" under the **Attributes &amp; Abilities** tab.`,
        }) + `%{${charName}|Move--${techName.replace(/\s/g, '-')}}`

      damageMacro =
        buildRollTemplate('TLBdamageRoll', {
          name: `@{character-name}`,
          move: techName,
          note: `No macro found. Create an ability named "Move--${techName.replace(
            /\s/g,
            '-'
          )}--Damage" under the **Attributes &amp; Abilities** tab.`,
        }) + `%{${charName}|Move--${techName.replace(/\s/g, '-')}--Damage}`

      // Save the data
      let result = {}
      result['prayer-attackmacro'] = attackMacro
      result['prayer-damagemacro'] = damageMacro

      setAttrs(result, 'prayers', () => {
        console.log("Prayer 'Attack,' and 'Damage' macros updated")
      })
    })
}
