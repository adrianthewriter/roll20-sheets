/**
 * Create a onChange handler for changing 'Lifepaths'.
 */
import { lookup, lookupKeys } from './data'

export default (sheet) => {
  sheet
    .listen(['change', 'remove'], 'lifepaths')
    .getFields('lifepath', 'lifepaths')
    .getAttrs([
      ...lookupKeys('skills'),
      'money',
      'starting-money-1',
      'starting-money-2',
      'starting-money-3',
    ])
    .then(({ e, attrSet, getAllFields, setAttrs }) => {
      if (e.sourceType === 'player') {
        // Utility func to strip 'the' from path names
        const parsePathName = (name) => {
          if (name) {
            return String(name.toLowerCase().replace(/^the /i, '') || '')
          } else return false
        }

        // Get the rowId of the changed lifepath
        const match = e.sourceAttribute.match(
          /^repeating_lifepaths_(-.+)_lifepath$/
        )
        const rowId = (match && match[1]) || false

        // Gather the path names
        let newPath = parsePathName((e.newValue && e.newValue) || false)
        let oldPath = parsePathName(
          (e.removedInfo && Object.values(e.removedInfo)[0]) ||
            (e.previousValue && e.previousValue) ||
            false
        )
        if (oldPath === newPath) oldPath = false

        // Gather the Lifepaths list
        getAllFields('lifepaths', (fieldSet) => {
          let lifepathsData = lookup('lifepaths')
          let lifepaths = fieldSet.map((path) => {
            return { rowId: path.rowId, lifepath: parsePathName(path.lifepath) }
          })

          // Flag which 'Key Attr' to update
          let updateKeyAttr = false
          if (newPath && rowId === lifepaths[lifepaths.length - 1].rowId) {
            const lastLifepath = lifepaths[lifepaths.length - 1].lifepath
            updateKeyAttr = lifepathsData[lastLifepath]
              ? lifepathsData[lastLifepath].attr
              : false
          } else if (!newPath && !rowId) {
            const lastLifepath = lifepaths[lifepaths.length - 1].lifepath
            updateKeyAttr = lifepathsData[lastLifepath]
              ? lifepathsData[lastLifepath].attr
              : false
          }

          // Flag which 'Key Skills' to update
          let updateKeySkills = { add: [], remove: [] }
          updateKeySkills.add = newPath
            ? lifepathsData[newPath] && lifepathsData[newPath].skills
            : []
          updateKeySkills.remove = oldPath
            ? lifepathsData[oldPath] && lifepathsData[oldPath].skills
            : []

          // Add the starting moneys
          const index = lifepaths.findIndex((path) => path.lifepath === newPath)
          let updateMoney = {}
          if (index < 3) {
            let startingPaths = lifepaths.slice(0, 3)
            for (let i in startingPaths) {
              let path = startingPaths[i].lifepath
              let key = parseInt(i) + 1
              updateMoney[`starting-money-${key}`] = lifepathsData[path].money
              updateMoney[`starting-money-${key}_max`] = path
            }
            console.log('money updated:', updateMoney)
          }

          // Build the update object
          let update = {}
          if (updateKeyAttr) update[`marked-attr`] = updateKeyAttr
          if (
            updateKeySkills &&
            updateKeySkills.remove &&
            updateKeySkills.remove.length
          ) {
            updateKeySkills.remove.forEach((skill) => {
              update[skill] =
                (parseInt(update[skill]) || parseInt(attrSet[skill]) || 0) -
                  1 || 0
            })
          }
          if (
            updateKeySkills &&
            updateKeySkills.add &&
            updateKeySkills.add.length
          ) {
            updateKeySkills.add.forEach((skill) => {
              update[skill] =
                (parseInt(update[skill]) || parseInt(attrSet[skill]) || 0) +
                  1 || 0
            })
          }
          if (updateMoney) {
            Object.entries(updateMoney).forEach(([key, value]) => {
              console.log(key, value)
              update[key] = value
            })
          }

          // Save the update
          setAttrs(update, () => {
            console.log('Lifepath updated')
          })
        })
      }
    })
}
