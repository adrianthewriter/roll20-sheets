/**
 * Create a onChange handler for changing the 'Key Attribute' marker.
 */
export default (sheet) => {
  sheet
    .listen(['change:marked-attr'])
    .getAttrs(['str', 'dex', 'int', 'wit', 'marked-attr'])
    .then(({ e, attrSet, setAttrs }) => {
      let newAttr = e.newValue !== '0' ? String(e.newValue) : false
      let previousAttr =
        e.previousValue !== '0' ? String(e.previousValue) : false

      let newAttrValue = parseInt(attrSet[newAttr]) || 0
      let previousAttrValue = parseInt(attrSet[previousAttr]) || 0

      // Adjust the Attribute values
      if (previousAttr !== newAttr) {
        const normalizeValue = (change, value) => {
          value = parseInt(value) || 0
          let newValue = change === 'increase' ? value + 1 : value - 1
          if (newValue > 5) newValue = 5
          if (newValue < 1) newValue = ''

          return newValue
        }

        // Set the attr's values
        if (parseInt(previousAttrValue) > 1) {
          setAttrs({
            [newAttr]: normalizeValue('increase', newAttrValue),
            [previousAttr]: normalizeValue('reduce', previousAttrValue),
          })
        }
      }
    })
}
