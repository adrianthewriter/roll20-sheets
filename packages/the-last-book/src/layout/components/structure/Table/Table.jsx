import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import { Field } from '@components'
import styles from './Table.css'

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

const Table = ({ id, repeat, hasToggle, header, ...props }) => (
  <div className={c(styles.table, `table--${id}`, props.className) || null}>
    {hasToggle && <Field hidden id={`table--${id}`} />}

    {header && (
      <div className={styles.tableheader}>
        {hasToggle && (
          <input
            type="checkbox"
            name={`attr_table--${id}`}
            value="hidden"
            title="Click to show/hide all table rows"
          />
        )}

        {header.map((item, index) => {
          const isObj = typeof item === 'object'
          const tooltip = isObj ? item.tooltip : null
          const label = isObj ? item.label : item

          switch (label) {
            case '<roll>':
              return <span className={styles.roll} />
            case '<view>':
              return <span className={styles.view} />
            default:
              return <span title={tooltip}>{label}</span>
          }
        })}
      </div>
    )}

    <div className={styles.content}>
      {repeat && isDev && (
        <>
          <div className="repcontainer" data-groupname={`repeating_${id}`}>
            <div className="repitem">
              <div className={styles.tablerow}>{props.children}</div>
            </div>
          </div>
          <div class="repcontrol" data-groupname={`repeating_${id}`}>
            <button className="btn repcontrol_edit">Modify</button>
            <button className="btn repcontrol_add">+Add</button>
          </div>
        </>
      )}
      {repeat && !isDev && (
        <fieldset className={`repeating_${id}`}>
          <div className={styles.tablerow}>{props.children}</div>
        </fieldset>
      )}
      {!repeat && <div className={styles.tablerow}>{props.children}</div>}
    </div>
  </div>
)

Table.propTypes = {
  id: PropTypes.string.isRequired,
  repeat: PropTypes.bool,
  hasToggle: PropTypes.bool,
  header: PropTypes.arrayOf(PropTypes.string),
}

Table.defaultProps = {
  repeat: false,
  hasToggle: false,
  header: false,
  className: null,
}

export default Table
