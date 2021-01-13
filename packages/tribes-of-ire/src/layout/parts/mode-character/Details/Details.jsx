import React from 'react'
import c from 'classnames'

import { Box, Field, MultiSelect } from '@components'
import styles from './Details.css'

const Option = ({ id, data, multi, ...props }) => (
  <label>
    <input
      type={multi ? 'checkbox' : 'radio'}
      name={multi ? `attr_${id}_${data.id}` : `attr_${id}`}
      value={data.id}
      checked={data.checked ? 'checked' : null}
      className={c(styles.option, props.className) || null}
    />
    <span>{data.label && data.label}</span>
  </label>
)

const Choice = ({ id, label, set, hidden, value, multi, ...props }) => (
  <>
    {hidden && (
      <input type="hidden" name={`attr_${id}`} value={value && value} />
    )}

    {!hidden && (
      <div className={styles.choice}>
        <span>{label}</span>
        {set.map((item) => (
          <Option multi={multi || null} id={id} data={item} />
        ))}
      </div>
    )}
  </>
)
export default () => (
  <Box id="details">
    <div>
      <h1 className={styles.logo}>
        <span className={styles.logotype}>Tribes of Ire</span>
        <span className={styles.subtitle}>A prehistoric fantasy game</span>
      </h1>

      <span className={styles.playbook} name="attr_sheet_playbook">
        Play-book
      </span>

      {/* <MultiSelect
        id="sheet_playbook"
        set={[
          { id: 'none', label: 'Choose a Playbook...', checked: true },
          { id: 'bear', label: 'Bear', desc: 'A beastly warrior' },
          { id: 'hawk', label: 'Hawk', desc: 'A hunter and leader' },
          { id: 'wolf', label: 'Wolf', desc: 'A watchful fighter' },
          { id: 'spider', label: 'Spider', desc: 'A mysterious shaman' },
        ]}
      /> */}
    </div>
    <div>
      <Field id="character-name" label="Name" placeholder="Character Name" />
      <Choice
        id="character-name_max"
        label="Lineage"
        set={[
          { id: '1', label: 'Bradish' },
          { id: '2', label: 'Saiah' },
          { id: '3', label: 'Sepha' },
          { id: '4', label: 'Gladroc' },
          { id: '5', label: 'Amah' },
          { id: '0', label: 'no one' },
        ]}
      />

      <Field id="character-tribe" label="Tribe" placeholder="Tribe Name" />

      <h3>Description</h3>
      <span>Choose from each category...</span>

      <Choice
        id="character-age"
        label="Age"
        set={[
          { id: '1', label: 'Childish youth' },
          { id: '2', label: 'Coming of age' },
          { id: '3', label: 'In their prime' },
          { id: '4', label: 'Middle aged' },
          { id: '5', label: 'Wise elder' },
        ]}
      />
      <Choice
        id="character-sex"
        label="Sex"
        set={[
          { id: 'm', label: 'Male' },
          { id: 'f', label: 'Female' },
          { id: 'a', label: 'Ambiguous' },
          { id: 'c', label: 'Concealed' },
          { id: 'o', label: 'Other' },
        ]}
      />
      <Choice
        id="character-desc"
        label="Look (pick 3)"
        multi
        set={[
          { id: 'angular', label: 'Angular' },
          { id: 'tough', label: 'Tough' },
          { id: 'calm', label: 'Calm' },
          { id: 'distant', label: 'Distant' },
          { id: 'enchanting', label: 'Enchanting' },
          { id: 'haunted', label: 'Haunted' },
          { id: 'unkempt', label: 'Unkempt' },
          { id: 'innocent', label: 'Innocent' },
          { id: 'bulky', label: 'Bulky' },
          { id: 'lean', label: 'Lean' },
          { id: 'pretty', label: 'Pretty' },
          { id: 'round', label: 'Round' },
          { id: 'scarred', label: 'Scarred' },
          { id: 'slim', label: 'Slim' },
          { id: 'intense', label: 'Intense' },
          { id: 'childlike', label: 'Childlike' },
          { id: 'soft', label: 'Soft' },
          { id: 'solid', label: 'Solid' },
          { id: 'aluring', label: 'Aluring' },
        ]}
      />
      <Choice
        id="character-nature"
        label="Motivation"
        set={[
          { id: '1', label: 'Community' },
          { id: '2', label: 'Curiosity' },
          { id: '3', label: 'Esteem' },
          { id: '4', label: 'Fear' },
          { id: '5', label: 'Greed' },
          { id: '6', label: 'Justice' },
          { id: '7', label: 'Liberty' },
          { id: '8', label: 'Loyalty' },
          { id: '9', label: 'Power' },
        ]}
      />
    </div>
  </Box>
)
