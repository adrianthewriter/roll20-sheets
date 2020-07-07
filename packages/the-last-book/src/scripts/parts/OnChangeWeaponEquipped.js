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
    .listen('change:weapon-equipped-toggle', 'weapons')
    .getFields(['weapon-equipped-toggle', 'weapon-type'], 'weapons')
    .then(({ fieldSet, setAttrs }) => {
      const equipped = fieldSet.weapons[0]['weapon-equipped-toggle']
      const weaponType = fieldSet.weapons[0]['weapon-type']
      let attackMacro, defenseMacro, damageMacro

      if (weaponType === 'melee') {
        attackMacro =
          buildRollTemplate('TLBattackRoll', {
            name: `@{character-name}`,
            weapon: `@{weapon-name}`,
            note: `?{Note}`,
          }) +
          buildRollQuery('Maneuver', {
            Swing: buildRollTemplate({
              // move: 'Swing',
              action: 'swings',
              attack:
                '[[2d6+(@{swing})+(@{weapon-swing})+(@{weapon-offhand-toggle})+(?{Attack modifier&#124;+0&#125;)]]',
            }),
            Thrust: buildRollTemplate({
              // move: 'Thrust',
              action: 'thrusts',
              attack:
                '[[2d6+(@{thrust})+(@{weapon-thrust})+(@{weapon-offhand-toggle})+(?{Attack modifier&#124;+0&#125;)]]',
            }),
            Throw: buildRollTemplate({
              // move: 'Throw',
              action: 'throws',
              attack:
                '[[2d6+(@{throw})+(@{weapon-throw})+(@{weapon-offhand-toggle})+(?{Attack modifier&#124;+0&#125;)]]',
            }),
          })

        defenseMacro =
          buildRollTemplate('TLBattackRoll', {
            name: `@{character-name}`,
            weapon: `@{weapon-name}`,
            note: `?{Note}`,
          }) +
          buildRollQuery('Maneuver', {
            Parry: buildRollTemplate({
              // move: 'Parry',
              action: 'parries',
              defense:
                '[[2d6+(@{parry})+(@{weapon-parry})+(@{weapon-offhand-toggle})+(?{Defense modifier&#124;+0&#125;)]]',
            }),
            Block: buildRollTemplate({
              move: 'Block',
              action: 'blocks',
              defense:
                '[[2d6+(@{block})+(@{weapon-block})+(@{weapon-offhand-toggle})+(?{Defense modifier&#124;+0&#125;)]]',
            }),
          })

        damageMacro = buildRollTemplate('TLBdamageRoll', {
          name: `@{character-name}`,
          weapon: `@{weapon-name}`,
          note: `?{Note}`,
          damage: buildRollQuery('Damage type', {
            ['@{weapon-damage1}']: `[[@{weapon-damage1|max}+(?{Damage modifier&#124;+0&#125;)]]&#125;&#125;  {{type=@{weapon-damage1}&#125;&#125;`,
            ['@{weapon-damage2}']: `[[@{weapon-damage2|max}+(?{Damage modifier&#124;+0&#125;)]]&#125;&#125;  {{type=@{weapon-damage2}&#125;&#125;`,
            ['@{weapon-damage3}']: `[[@{weapon-damage3|max}+(?{Damage modifier&#124;+0&#125;)]]&#125;&#125;  {{type=@{weapon-damage3}&#125;&#125;`,
          }),
        })
      }
      if (weaponType === 'ranged') {
        attackMacro = buildRollTemplate('TLBattackRoll', {
          name: `@{character-name}`,
          weapon: `@{weapon-name}`,
          // move: `Shoot`,
          action: 'shoots',
          attack: `[[2d6+(@{shoot})+(@{weapon-shoot})+(?{Aimed|No,+0|Yes,@{weapon-acc}})+(?{Attack modifier|+0})]]`,
          note: `?{Note}`,
        })
        damageMacro = buildRollTemplate('TLBdamageRoll', {
          name: `@{character-name}`,
          weapon: `@{weapon-name}`,
          type: `@{weapon-damage1}`,
          damage: `[[@{weapon-damage1|max}+(?{Damage modifier|+0})]]`,
          note: `?{Note}`,
        })
      }
      if (weaponType === 'shield') {
        defenseMacro = buildRollTemplate('TLBattackRoll', {
          name: `@{character-name}`,
          weapon: `@{weapon-name}`,
          // move: `Block`,
          action: 'blocks',
          defense: `[[2d6+(@{block})+(@{weapon-block})+(?{Defense modifier|+0})]]`,
          note: `?{Note}`,
        })
      }

      // Toggle the equipped/unequipped state
      setAttrs(
        {
          ['weapon-attackmacro']: attackMacro,
          ['weapon-defensemacro']: defenseMacro,
          ['weapon-damagemacro']: damageMacro,
          // ['weapon-equipped-toggle']: equipped === 'equipped' ? '' : 'equipped',
        },
        'weapons',
        () => {
          console.log(
            'Weapon ',
            equipped === 'equipped' ? 'equipped' : 'unequipped'
          )
        }
      )
    })
}
