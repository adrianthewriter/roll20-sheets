import SwordsmithSheetWorkers from './util/swordsmith-helper'

const sheet = new SwordsmithSheetWorkers()

sheet
  .listen('sheet:opened')
  .getAttrs(['sheet_ver', 'character_name', 'character-name'])
  .then(({ version, attrSet, setAttrs }) => {
    // Prepare the data
    const shortName = attrSet['character_name']
    const longName = attrSet['character-name'] || shortName
    const curVersion = attrSet['sheet_ver']
    const newVersion = version

    // Bail if the sheet isn't brand new
    if (curVersion && curVersion != '') {
      setAttrs({ ['sheet_ver']: newVersion })
      return false
    }

    // Set initial sheet values
    setAttrs(
      {
        ['sheet_ver']: newVersion,
        ['sheet_mode']: 'character',
        ['character-name']: longName != '' ? longName : shortName,
        ['character-level']: 1,
      },
      () => {
        console.log('Your new character was created! Have fun!')
      }
    )
  })

const diceMagic = (num) => {
  const range = (end) => [...Array(end + 1).keys()].slice(1)
  if (num > 0)
    return `dice=${range(num)
      .map(() => '[[d6]]')
      .join('&' + '#44' + '; ')}`
  else return 'zerodice=[[d6]]'
}

const buildRollFormula = (base) => {
  return ` {{?{Bonus Dice|${[0, 1, 2, 3, 4, 5, 6, -1, -2, -3]
    .map((n) => `${n},${diceMagic(n + (parseInt(base) || 0))}`)
    .join('|')}}}}`
}

Array.from([
  'awareness',
  'coordination',
  'knowledge',
  'logic',
  'prowess',
  'resistance',
  'speech',
  'stealth',
  'unarmed',
  'melee',
  'ranged',
  'magic',
  'aptitude',
]).forEach((name) => {
  sheet.listen(`change:${name}`).then(({ e, setAttrs }) => {
    if (String(e.newValue) === '0' && e.sourceType === 'player') {
      setAttrs({
        name: (parseInt(e.previousValue) || 1) - 1,
      })
    }

    setAttrs({
      [`${name}_formula`]: buildRollFormula(e.newValue || '0'),
    })
  })
})

sheet
  .listen(`change:sheet_playbook`)
  .getAttrs([
    'awareness',
    'coordination',
    'knowledge',
    'logic',
    'prowess',
    'resistance',
    'speech',
    'stealth',
    'unarmed',
    'melee',
    'ranged',
    'magic',
  ])
  .then(({ e, attrSet, setAttrs }) => {
    // Set up the defaults
    const base = {
      bear: {
        prowess: '1',
        resistance: '1',
        melee: '2',
      },
      hawk: {
        awareness: '1',
        speech: '2',
        melee: '1',
      },
      wolf: {
        awareness: '2',
        speech: '1',
        melee: '1',
      },
      spider: {
        knowledge: '1',
        speech: '1',
        magic: '2',
      },
    }

    // Adjust the values
    let newSkills = {}
    let mod = {}

    switch (e.previousValue) {
      case 'bear':
        for (const prop in base.bear) {
          mod[prop] = 0
          mod[prop] -= parseInt(base.bear[prop])
        }
        break
      case 'hawk':
        for (const prop in base.hawk) {
          mod[prop] = 0
          mod[prop] -= parseInt(base.hawk[prop])
        }
        break
      case 'wolf':
        for (const prop in base.wolf) {
          mod[prop] = 0
          mod[prop] -= parseInt(base.wolf[prop])
        }
        break
      case 'spider':
        for (const prop in base.spider) {
          mod[prop] = 0
          mod[prop] -= parseInt(base.spider[prop])
        }
    }

    switch (e.newValue) {
      case 'bear':
        for (const prop in base.bear) {
          mod[prop] = mod[prop] || 0
          mod[prop] += parseInt(base.bear[prop])
        }
        break
      case 'hawk':
        for (const prop in base.hawk) {
          mod[prop] = mod[prop] || 0
          mod[prop] += parseInt(base.hawk[prop])
        }
        break
      case 'wolf':
        for (const prop in base.wolf) {
          mod[prop] = mod[prop] || 0
          mod[prop] += parseInt(base.wolf[prop])
        }
        break
      case 'spider':
        for (const prop in base.spider) {
          mod[prop] = mod[prop] || 0
          mod[prop] += parseInt(base.spider[prop])
        }
        break
    }

    for (const skill in attrSet) {
      if (!mod[skill]) mod[skill] = 0
      newSkills[skill] = parseInt(attrSet[skill]) + mod[skill]
    }
    console.log('mod: ', mod)

    for (const skill in newSkills) {
      if (newSkills[skill] < 0) newSkills[skill] = 0
      if (newSkills[skill] > 4) newSkills[skill] = 4
      newSkills[skill] = String(newSkills[skill])
    }
    console.log('newSkills: ', newSkills)

    // Save the values to the sheet
    setAttrs(newSkills, () => {
      console.log('Your playbook was changed!')
    })
  })
