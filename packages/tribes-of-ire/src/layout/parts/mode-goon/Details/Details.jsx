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
  <Box id="goondetails">
    <div>
      <h1 className={styles.logo}>
        <span className={styles.logotype}>Tribes of Ire</span>
        <span className={styles.subtitle}></span>
        <Choice
          id="character-name_max"
          label="Type"
          set={[
            { id: '1', label: 'Human' },
            { id: '2', label: 'Animal' },
            { id: '2', label: 'Beast' },
            { id: '2', label: 'Monster' },
            { id: '2', label: 'Undead' },
            { id: '3', label: 'Spirit God' },
            { id: '4', label: 'Other' },
          ]}
        />
      </h1>
    </div>
    <div>
      <Field id="character-name" label="Name" placeholder="Character Name" />
      <Field type="textbox" id="goon-desc" label="Details" />
    </div>
  </Box>
)
