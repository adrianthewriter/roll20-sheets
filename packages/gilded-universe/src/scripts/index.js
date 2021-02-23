import RunesmithSheetWorkers from './util/runesmith-helper'

const sheet = new RunesmithSheetWorkers()

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

    // Add some table rows
    const addRows = (num, entries) => {
      const range = (end) => [...Array(end + 1).keys()].slice(1)
      if (num > 0) {
        return range(num).map(() => {
          let rowId = generateRowID()
          return Object.fromEntries(
            entries.map(({ field, value }) => [`${rowId}_${field}`, value])
          )
        })
      }
    }

    // Set initial sheet values
    setAttrs(
      {
        ['sheet_ver']: newVersion,
        ['sheet_mode']: 'character',
        ['character-name']: longName != '' ? longName : shortName,
        ['character-xp_max']: '450',
        ['money']: '0.00',
      },
      () => {
        console.log('Your new character was created! Have fun!')
      }
    )

    setAttrs(
      Object.assign(
        ...addRows(1, [
          { field: 'session-toggle', value: 'hidden' },
          { field: 'session-date', value: 'Character Creation' },
          { field: 'session-xp', value: '450' },
        ]),
        ...addRows(1, [
          { field: 'session-toggle', value: 'hidden' },
          { field: 'session-date', value: 'Campaign Arc 1' },
          { field: 'session-header', value: 'checked' },
        ]),
        ...addRows(1, [
          { field: 'session-date', value: 'First Session!' },
          { field: 'session-xp', value: '' },
        ])
      ),
      'sessionlog'
    )

    setAttrs(
      Object.assign(...addRows(3, [{ field: 'lifepath', value: '' }])),
      'lifepaths'
    )
    setAttrs(
      Object.assign(...addRows(6, [{ field: 'item', value: '' }])),
      'equipment'
    )
    setAttrs(
      Object.assign(...addRows(4, [{ field: 'item', value: '' }])),
      'other-items'
    )
  })

const buildRollFormula = (attr, dice) => {
  if (dice > 0)
    return `{{dice=[[[[${dice}+(?{Bonus Dice|0})-?{Burn|0}]]-[[${dice}+(?{Bonus Dice|0})]]d6dl?{Burn|0}>2f<@{${attr}}scs=1cf=0]]}}`
  else
    return `{{dice=[[[[1+(?{Bonus Dice|0})-?{Burn|0}]]-[[2+(?{Bonus Dice|0})]]d6dl[[1+?{Burn|0}]]>2f<@{${attr}}scs=1cf=0]]}} {{zerodice=1}}`
}

Array.from([
  { skill: 'brute-force', attr: 'str' },
  { skill: 'close-combat', attr: 'str' },
  { skill: 'machinery', attr: 'str' },
  { skill: 'stamina', attr: 'str' },
  { skill: 'mobility', attr: 'dex' },
  { skill: 'piloting', attr: 'dex' },
  { skill: 'ranged-combat', attr: 'dex' },
  { skill: 'tinkering', attr: 'dex' },
  { skill: 'history', attr: 'int' },
  { skill: 'medicine', attr: 'int' },
  { skill: 'science', attr: 'int' },
  { skill: 'technology', attr: 'int' },
  { skill: 'command', attr: 'wit' },
  { skill: 'manipulation', attr: 'wit' },
  { skill: 'observation', attr: 'wit' },
  { skill: 'survival', attr: 'wit' },
]).forEach(({ skill, attr }) => {
  sheet.listen(`change:${skill}`).then(({ e, setAttrs }) => {
    if (String(e.newValue) === '0' && e.sourceType === 'player') {
      setAttrs({
        skill: (parseInt(e.previousValue) || 1) - 1,
      })
    }

    setAttrs({
      [`${skill}_formula`]: buildRollFormula(attr, e.newValue || '0'),
    })
  })
})

sheet
  .listen(
    ['change:session-xp', 'change:session-header', 'remove'],
    'sessionlog'
  )
  .getFields(['session-xp', 'session-header'], 'sessionlog')
  .then(({ e, getAllFields, setAttrs }) => {
    getAllFields('sessionlog', (fieldSet) => {
      let totalXp = 0
      fieldSet.forEach((row) => {
        if (row['session-header'] !== 'checked') {
          totalXp += parseInt(row['session-xp'], 10) || 0
        }
      })

      setAttrs({
        ['character-xp_max']: totalXp,
      })
    })
  })
