import React from 'react'
import c from 'classnames'

import { Dialog, Field, Toggle } from '@components'
import styles from './SettingsDialog.css'

// Settings Dialog
export default () => (
  <Dialog id="settings" label="Settings">
    <Field hidden id="sheet_mode" value="character" />

    <div className={styles.block}>
      <h3>Sheet Mode</h3>
      <Toggle disabled id="sheet_mode" value="tribe" label="Tribe" />
      <Toggle id="sheet_mode" value="character" label="Character" />
      <Toggle id="sheet_mode" value="ally" label="Ally" />
      <Toggle id="sheet_mode" value="enemy" label="Enemy" />
    </div>

    <div className={c(styles.block, 'sheet-block--character')}>
      <p>Choose a playbook...</p>
      <Toggle
        id="sheet_playbook"
        value="bear"
        label="The Bear"
        desc="A beastly warrior"
      />
      <Toggle
        id="sheet_playbook"
        value="hawk"
        label="The Hawk"
        desc="A hunter and leader"
      />
      <Toggle
        id="sheet_playbook"
        value="wolf"
        label="The Wolf"
        desc="A watchful fighter"
      />
      <Toggle
        id="sheet_playbook"
        value="spider"
        label="The Spider"
        desc="A mysterious shaman"
      />
    </div>

    <div className={c(styles.block, 'sheet-block--goon')}>
      <p>Type of character...</p>
      <Toggle id="sheet_npctype" value="unique" label="Unique Character" />
      <Toggle
        id="sheet_npctype"
        value="multiple"
        label="Multiple Similar Goons"
      />
    </div>
  </Dialog>
)
