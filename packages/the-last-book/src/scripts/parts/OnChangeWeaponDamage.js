export default (sheet) => {
  sheet
    .listen('change:weapon-damage', 'weapons')
    .getFields(['weapon-damage'], 'weapons')
    .then(({ fieldSet, setAttrs }) => {
      let rawDamage = fieldSet.weapons[0]['weapon-damage']

      let damageTypes = rawDamage.match(/\((.+)\)/)[1]
      damageTypes = damageTypes.replace(/\//g, '')
      damageTypes = damageTypes.split('').map((entry, i) => {
        let type = ''
        if (entry.toLowerCase() === 'i') type = 'Impact'
        if (entry.toLowerCase() === 's') type = 'Slash'
        if (entry.toLowerCase() === 'p') type = 'Pierce'
        if (entry.toLowerCase() === 'r') type = 'Rend'

        let mod = 0
        if (i === 0) mod = 0
        if (i === 1) mod = -2
        if (i === 2) mod = -4

        return { type, mod }
      })

      // Get the raw damage
      rawDamage = rawDamage.match(/^(\d+[Dd]\d+)([\+\-]\d)/)
      damageTypes = damageTypes.map((entry) => {
        let dice = rawDamage[1]
        let mod = parseInt(rawDamage[2], 10) + entry.mod
        let damage = `${dice}${mod >= 0 ? '+' : ''}${mod.toString()}`
        return { type: entry.type, damage }
      })

      // Prepare the parsed result
      let parsedDamage = {}
      parsedDamage['weapon-damage1'] = damageTypes[0].type
      parsedDamage['weapon-damage1_max'] = damageTypes[0].damage
      if (damageTypes[1]) {
        parsedDamage['weapon-damage2'] = damageTypes[1].type
        parsedDamage['weapon-damage2_max'] = damageTypes[1].damage
      }
      if (damageTypes[2]) {
        parsedDamage['weapon-damage3'] = damageTypes[2].type
        parsedDamage['weapon-damage3_max'] = damageTypes[2].damage
      }

      // Set the damage attributes...
      setAttrs(parsedDamage, 'weapons', () => {
        console.log('Damage types updated to: ', parsedDamage)
      })
    })
}
