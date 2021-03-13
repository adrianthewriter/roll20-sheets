const data = {
  skills: {
    ['brute-force']: 'str',
    ['close-combat']: 'str',
    ['machinery']: 'str',
    ['stamina']: 'str',
    ['mobility']: 'dex',
    ['piloting']: 'dex',
    ['ranged-combat']: 'dex',
    ['tinkering']: 'dex',
    ['history']: 'int',
    ['medicine']: 'int',
    ['science']: 'int',
    ['technology']: 'int',
    ['command']: 'wit',
    ['manipulation']: 'wit',
    ['observation']: 'wit',
    ['survival']: 'wit',
  },

  lifepaths: {
    adventurer: {
      attr: 'dex',
      skills: ['observation', 'survival'],
      money: '1d6*100',
    },
    afflicted: {
      attr: 'dex',
      skills: ['observation', 'survival'],
      money: '1d6*100',
    },
    archivist: {
      attr: 'int',
      skills: ['history', 'science'],
      money: '1d6*150',
    },
    champion: {
      attr: 'str',
      skills: ['ranged-combat', 'mobility'],
      money: '2d6*200',
    },
    chosen: {
      attr: 'wit',
      skills: ['command', 'manipulation'],
      money: '2d6*250',
    },
    // ,creator:	'dex'	'machinery'	'tinkering'
    // ,destroyer:	'str'	'c. combat'	'brute force'
    // ,disciple:	'int'	'manipulation'	'history'
    // ,expert:	'dex'	'piloting'	'technology'
    // ,guardian:	'str'	'stamina'	'observation'
    // ,healer:	'int'	'medicine'	'technology'
    // ,heretic:	str	history	stamina
    // ,hermit:	dex	observation	survival
    // ,leader:	wit	command	observation
    // ,martyr:	wit	mobility	observation
    // ,mediator:	wit	manipulation	observation
    // ,mentor:	int	command	history
    // ,mystic:	wit	history	mobility
    // ,philosopher:	int	history	science
    // ,righteous:	str	c. combat	command
    // ,student:	int	observation	technology
    // ,traveler:	dex	survival	piloting
    // ,visionary:	wit	technology	science
    // ,zealot:	str	c. combat	history
  },

  talents: {
    ['improved passive defense']: [['defense', 1]],
    ['improved speed']: [['speed', 5]],
    ['initiative bonus']: [['initiative', 1]],
    ['extra health']: [['health', 1]],
    ['extra health 2']: [['health', 1]],
    ['extra health 3']: [['health', 1]],
    ['extra vigor']: [['vigor', 1]],
    ['extra resolve']: [['resolve', 1]],
    ['test']: [
      ['health', 1],
      ['vigor', 1],
    ],
  },
}

export function lookup(lookup) {
  if (data && lookup && !(lookup === null || lookup.trim().length === 0)) {
    return data[lookup]
  } else return false
}

export function lookupKeys(lookup) {
  if (data && lookup && !(lookup === null || lookup.trim().length === 0)) {
    return Object.keys(data[lookup])
  } else return false
}

export function roll(dice) {
  let match = dice.match(/(\d*)d(\d+)/i)
  let number = (match && parseInt(match[1])) || 1
  let sides = (match && parseInt(match[2])) || 1
  let result = Array.from(Array(number).keys()).reduce((total, cur) => {
    return total + Math.floor(Math.random() * sides) + 1
  })
  return result
}
