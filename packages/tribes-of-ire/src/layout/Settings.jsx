import React from 'react'
import c from 'classnames'

import { Field, Toggle } from '@components'

// Hidden Settings Fields
const Settings = () => <Field hidden id="sheet_settings" value="shown" />
const Rules = () => <Field hidden id="sheet_rules" value="hidden" />
const Mode = () => <Field hidden id="sheet_mode" value="character" />
const Playbook = () => <Field hidden id="sheet_playbook" value="none" />

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
  Settings,
  Rules,
  Mode,
  Playbook,
}
