/**
 * Create a onChange handler for changing the 'Key Attribute' marker.
 */
export default (sheet) => {
  const tabs = [
    'details',
    'warrior',
    'conqueror',
    'alchemist',
    'templar',
    'lotus-eater',
    'shaman',
    'equipment',
    'notes',
    'settings',
  ]

  sheet
    .listen(tabs.map((x) => `clicked:character-tabs--${x}`))
    .then(({ e, setAttrs }) => {
      const match = e.triggerName.match(/--(.+)$/i)
      const clickedTab = match && match[1]

      let clickedTabLabel
      switch (clickedTab) {
        case 'details':
          clickedTabLabel = 'Advantages & Skills'
          break
        default:
          clickedTabLabel = clickedTab
            .split(/\s|-/)
            .map((word) => {
              return word.charAt(0).toUpperCase() + word.slice(1)
            })
            .join(' ')
      }

      setAttrs({
        ['character-tabs']: clickedTab,
        ['character-tabs_max']: clickedTabLabel,
      })
    })
}
