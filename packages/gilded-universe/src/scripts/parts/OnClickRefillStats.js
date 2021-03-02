/**
 * Create a onClicked handler for adjusting the stats.
 */
export default (sheet) => {
  Array('health', 'vigor', 'resolve').forEach((stat) => {
    sheet
      .listen(`clicked:restore-${stat}`)
      .getAttrs(`${stat}_max`)
      .then(({ attrSet, setAttrs }) => {
        setAttrs({
          [stat]: attrSet[`${stat}_max`] || 0,
        })
      })

    sheet
      .listen(`change:${stat}`)
      .getAttrs([stat, `${stat}_max`])
      .then(({ e, attrSet, setAttrs }) => {
        if (e.sourceType === 'player') {
          const min = 0
          const max = parseInt(attrSet[`${stat}_max`]) || 0
          const cur = parseInt(e.previousValue) || 0

          let action = String(e.newValue) || ''
          let match = action.match(/^(\+|-)*(\d+)/)
          let math = match && match[1]
          let value = parseInt(match && match[2]) || 0
          let result

          if (!math) {
            result = value
          } else if (math && math === '+') {
            result = cur + value
          } else if (math && math === '-') {
            result = cur - value
          }

          if (result > max) result = max
          if (result < min) result = min

          console.log(`${cur} ${math} ${value} = ${result}`)

          setAttrs({
            [stat]: result,
          })
        }
      })
  })
}
