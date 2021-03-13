import React from 'react'
import c from 'classnames'

import styles from './Skills.css'
import { Field, Toggle, Drawer, Table, Button } from '@components'

const Skill = ({ id }) => (
  <div className={styles.skill}>
    <Toggle
      id={`skill${id}--collapse`}
      value="hidden"
      title="Show/hide additional fields"
    />
    <Field id={`skill${id}--name`} placeholder="Skill Name" />
    <Field id={`skill${id}--level`} placeholder="-" />
    <Field hidden id={`skill${id}--chance`} />
    <Button id={`skill${id}--roll`} roll={`/r d100`}>
      <span name={`skill${id}--chance`}>0</span>
    </Button>

    <Drawer id="skill" toggle={`skill${id}--collapse`}>
      <div className={styles.container}>
        <Field
          list="skills--parent"
          id={`skill${id}--parent`}
          label="Parent"
          placeholder="-"
        />
        <Field
          list="skills--difficulty"
          id={`skill${id}--diff`}
          label="Diff"
          placeholder="-"
        />
        <Field id={`skill${id}--bonus`} label="Bonus" placeholder="+0" />
      </div>
      <Field type="textbox" id={`skill${id}--desc`} />
    </Drawer>
  </div>
)

export default () => (
  <div>
    <h3>Skills</h3>
    <div className={styles.skills}>
      <datalist id="skills--difficulty">
        <option value="E/7">Effortless</option>
        <option value="S/6">Simple</option>
        <option value="E/5">Easy</option>
        <option value="A/4">Average</option>
        <option value="H/3">Hard</option>
        <option value="C/2">Complex</option>
      </datalist>

      <datalist id="skills--parent">
        <option>IQ</option>
        <option>WL</option>
        <option>AW</option>
        <option>ST</option>
        <option>AG</option>
        <option>SM</option>
      </datalist>

      <Table
        repeat
        id="skillsets--standard"
        header={['<view>', 'Skills', 'Level/ Spec.', 'Chance']}
      >
        <>
          <Field hidden id="skillset--header" />
          <div className={styles.skillset}>
            <Field hidden id="skillset--level" />
            <Field hidden id="skillset--level_max" value="1" />

            <div className={styles.skill}>
              <Toggle
                id="skillset--collapse"
                value="hidden"
                title="Show/hide additional fields"
              />
              <Field id="skillset--name" placeholder="Skillset Name" />
              <Field id="skillset--level" placeholder="-" />
              <Field hidden id="skillset--chance" />
              <Button id="skillset--roll" roll={`/r d100`}>
                <span name="skillset--chance">0</span>
              </Button>
              <Drawer id="skill" toggle="skillset--collapse">
                <div className={styles.container}>
                  <Field
                    list="skills--parent"
                    id="skillset--parent"
                    label="Parent"
                    value="IQ"
                  />
                  <Field
                    list="skills--difficulty"
                    id="skillset--diff"
                    label="Diff"
                    value="H/3"
                  />
                  <Field id="skillset--bonus" label="Bonus" placeholder="+0" />
                </div>
                <Field type="textbox" id="skillset--desc" />
                <div className={styles.container}>
                  <Toggle
                    id="skillset--header"
                    label="Mark as header"
                    value="checked"
                  />
                  <Field
                    type="number"
                    id="skillset--level_max"
                    label="Specs"
                    placeholder="-"
                    max="10"
                  />
                  <Field id="skillset--cap" label="CAP" placeholder="-" />
                </div>
              </Drawer>
            </div>
            {Array.from(Array(9).keys()).map((x) => (
              <Skill id={x + 1} />
            ))}
          </div>
        </>
      </Table>
    </div>
  </div>
)
