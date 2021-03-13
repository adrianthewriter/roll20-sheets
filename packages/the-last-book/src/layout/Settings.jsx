import React from 'react'
import c from 'classnames'

import { Field } from '@components'

// Hidden Settings Fields
const Mode = () => <Field hidden id="sheet_mode" value="character" />
const Dialogs = () => (
  <>
    <Field hidden id="dialog_session-log" value="hidden" />
  </>
)
const Show = () => (
  <>
    <Field hidden id="show_conqueror" value="hidden" />
    <Field hidden id="show_alchemist" value="hidden" />
    <Field hidden id="show_templar" value="hidden" />
    <Field hidden id="show_lotus-eater" value="hidden" />
    <Field hidden id="show_shaman" value="hidden" />
  </>
)

/**
 * Sheet Settings:
 * Insert at the top of the sheet so they can be accessed globally by styles
 *
 * Ex:
 *  import { Settings, CharacterSheet } from '@layout'
 *
 *  export default () => (
 *    <>
 *      <Settings.Mode />
 *      ...
 *      <CharacterSheet />
 *    </>
 *  )
 */
export default {
  Mode,
  Dialogs,
  Show,
}
