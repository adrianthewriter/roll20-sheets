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
    .listen(['change:technique-usemacros-toggle'], 'techniques')
    .getAttrs(['character_name'])
    .getFields(['technique-name', 'technique-parent'], 'techniques')
    .then(({ attrSet, fieldSet, setAttrs }) => {
      const charName = attrSet['character_name']
      const techName = fieldSet.techniques[0]['technique-name']
      const techParent = fieldSet.techniques[0][
        'technique-parent'
      ].toLowerCase()
      let techType, attackMacro, damageMacro

      switch (techParent) {
        case 'swing':
        case 'thrust':
        case 'throw':
        case 'shoot':
          techType = 'Attack'
          break
        case 'parry':
        case 'block':
        case 'evade':
          techType = 'Defense'
          break
      }

      attackMacro =
        buildRollTemplate('TLBattackRoll', {
          name: `@{character-name}`,
          move: techName,
          [techType.toLowerCase()]: `[[2d6+(@{${techParent}})+(?{${techType} modifier|+0})]]`,
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
      result['technique-attackmacro'] = attackMacro
      result['technique-damagemacro'] = damageMacro

      setAttrs(result, 'techniques', () => {
        console.log("Technique 'Attack,' and 'Damage' macros updated")
      })
    })
}
