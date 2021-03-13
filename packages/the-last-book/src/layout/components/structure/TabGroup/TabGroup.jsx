import React from 'react'
import c from 'classnames'

import { Field, Button } from '@components/'

import styles from './TabGroup.css'

export default ({ id, toggle, tab, children, ...props }) => {
  const groupCountFields = []

  let groups = {}
  React.Children.forEach(children, (entry) => {
    let group = entry.props.group
    if (group) {
      if (!groups[group]) groups[group] = []
      groups[group].push(entry)
    }
  })

  let firstTabId, firstTabLabel
  const tabs = React.Children.map(children, ({ props: { id, label } }) => {
    if (firstTabId === undefined) {
      firstTabId = id
      firstTabLabel = label
    }

    return (
      <Button
        action
        id={`${toggle}--${id}`}
        label={label}
        className={styles.tab}
      />
    )
  })

  groups = Object.entries(groups).map(([groupName, entries]) => {
    let showCount = 0
    entries = entries.map(({ props: { id, label, show = false } }) => {
      if (show) showCount++

      return (
        <Button
          action
          id={`${toggle}--${id}`}
          label={label}
          className={styles.tab}
        />
      )
    })

    groupCountFields.push(
      <Field
        hidden
        value={showCount ? showCount : entries.length}
        id={`${toggle}--${groupName.toLowerCase().replace(' ', '-')}`}
      />
    )

    return (
      <div className={styles.tabmenu}>
        <span>{groupName} ≡</span>
        <div>{entries}</div>
      </div>
    )
  })

  if (groups.length) {
    tabs.splice(tabs.length - 3, 0, ...groups)
  }

  return (
    <div className={c(styles.tabgroup, `tabgroup--${id}`)}>
      <Field hidden id={toggle} value={firstTabId} />
      <Field hidden id={`${toggle}_max`} value={firstTabLabel} />

      {groupCountFields}
      <div className={styles.tabs}>
        <div className={c(styles.tab, styles.selected)}>
          <Field displayOnly id={`${toggle}_max`} value={firstTabLabel} />
        </div>
        {tabs}
      </div>
      {children}
    </div>
  )
}
