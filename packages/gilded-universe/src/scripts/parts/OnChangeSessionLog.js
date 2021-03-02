/**
 * Create a onChange handler for 'Session Log' data is changed to sum the total XP field.
 */
export default (sheet) => {
  sheet
    .listen(
      ['change:session-xp', 'change:session-header', 'remove'],
      'sessionlog'
    )
    .getFields(['session-date', 'session-xp', 'session-header'], 'sessionlog')
    .then(({ e, getAllFields, setAttrs }) => {
      // Add up the total XP
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

  // sheet.listen(['change:dialog_session-log']).then()
}
