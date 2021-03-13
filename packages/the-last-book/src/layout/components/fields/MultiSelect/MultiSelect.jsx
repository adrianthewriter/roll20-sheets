import React from 'react'
import c from 'classnames'

// import { Field } from 'swordsmith'

import styles from './MultiSelect.css'

const Option = ({ id, data, ...props }) => (
  <>
    <input
      type="radio"
      name={`attr_${id}`}
      value={data.id}
      checked={data.checked ? 'checked' : null}
      className={c(styles.option, props.className) || null}
    />
    <span>
      {data.label && data.label}
      {data.desc && <span className={styles.desc}>{data.desc}</span>}
    </span>
  </>
)

export default ({ id, set, hidden, value, ...props }) => (
  <>
    {hidden && (
      <input type="hidden" name={`attr_${id}`} value={value && value} />
    )}

    {!hidden && (
      <label className={c(styles.multiselect, props.className)}>
        {set.map((item) => (
          <Option id={id} data={item} />
        ))}
      </label>
    )}
  </>
)
