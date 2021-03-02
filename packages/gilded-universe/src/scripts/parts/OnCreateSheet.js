/**
 * Create a onOpen handler for when a new character is created that inputs some initial field values and adds a number of repeating table rows.
 */

export default (sheet) => {
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
          ['str']: '3',
          ['dex']: '3',
          ['int']: '3',
          ['wit']: '3',
          ['character-xp']: '450',
          ['character-xp_max']: '450',
          ['starting-money-1']: '0',
          ['starting-money-2']: '0',
          ['starting-money-3']: '0',
          ['money']: '',
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
            { field: 'session-date', value: 'Bonus Starting XP' },
            { field: 'session-xp', value: 'roll 2d6x10' },
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
}
