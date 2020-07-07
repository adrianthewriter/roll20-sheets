// const TablesWithRowIds = [
//   { table: 'skills', row: 'skill' },
//   { table: 'techniques', row: 'technique' },
//   { table: 'prayers', row: 'prayer' },
//   { table: 'armor', row: 'armor' },
//   { table: 'weapons', row: 'weapon' },
//   { table: 'items', row: 'item' },
//   { table: 'otheritems', row: 'item' },
// ]
/**
 * setRowId()
 * @param {string} table - the repeating table's name.
 * @param {string} row - the row's field prefix.
 * @param {Object} props - props from the then() call. Needs {e, setAttrs}
 */
export default (table, row, { e, setAttrs }) => {
  let match = e.triggerName.match(/_(-[-\d\w]+)$/)
  let rowId = match[1] || 'No row ID found'

  let result = {}
  result[`${row}-id`] = rowId
  setAttrs(result, table, () => {
    console.log('Row ID# updated')
  })
}
