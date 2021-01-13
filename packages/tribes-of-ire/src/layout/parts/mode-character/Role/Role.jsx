import React from 'react'
import c from 'classnames'

import { Box, Table, Field, Toggle, Drawer } from '@components'
import styles from './Role.css'

const Aspect = ({ id, label, text }) => (
  <div className={styles.aspect}>
    <Toggle id={`aspect-${id}`} />
    <span className={styles.label}>{label}</span>
    <span className={styles.text}>{text}</span>
  </div>
)

const Bear = () => (
  <div className={c(styles.role, 'sheet-role--bear')}>
    <h3>Animalistic Trance</h3>
    <p>
      As <em>The Bear</em>, you can enter a trance state to take on the
      qualities of your namesake totem, the Bear.
    </p>
    <p className={styles.text}>
      Once per Rest, when you enter your trance, roll
      <em>Medicine (Weird)</em>. On a 1-3, hold 1. On a 4-5, hold 2. On a 6+
      hold 3. On a crit, hold 5. Spend hold to unlock aspects of your trance:
    </p>

    <Aspect
      id="pelt"
      label="Bear's Pelt"
      text="Reduce the severity of all damage you take by 1 level."
    />
    <Aspect
      id="claws"
      label="Bear's Claws"
      text="Increase the severity of all damage you deal by 1 level."
    />
    <Aspect
      id="soul"
      label="Bear's Soul"
      text="When you resist the effects of magic, you can't fail. Treat a roll of 1-3 as a Near Miss."
    />
    <Aspect
      id="stamina"
      label="Bear's Stamina"
      text="Your trance lasts for up to an hour instead of only 10 minutes."
    />
    <Aspect
      id="focus"
      label="Bear's Focus"
      text="If you stop your trance early, you can enter it again before Resting but must take a Moderate Condition ('Mental Strain')."
    />
  </div>
)

const Hawk = () => (
  <div className={c(styles.role, 'sheet-role--hawk')}>
    <h3>Battle Cry</h3>
    <p>
      As <em>The Hawk</em>, you can command your allies to fight more
      effectively as a team.
    </p>
    <p className={styles.text}>
      Once per fight, call out to your allies and tell them the plan. As long as
      their action carries out your plan, they gain +1 Forward on their rolls.
      If the plan changes, lose the bonus.
    </p>

    <h3>War Chief</h3>
    <p>
      As <em>The Hawk</em>, you have a certain authority over others within your
      tribe, and members of other tribes are more likely to respect you.
    </p>
    <p className={styles.text}>
      Once per Rest, you can treat a Miss on a Speech test as a Near Miss
      instead. When you pass a Speech test, do so with greater Effect.
    </p>
  </div>
)

const Wolf = () => (
  <div className={c(styles.role, 'sheet-role--wolf')}>
    <h3>Watch and Listen</h3>
    <p>
      As <em>The Wolf</em>, you are a master hunter. You know how to study your
      enemies to find their true weakness.
    </p>
    <p className={styles.text}>
      Once per fight, spend your full turn observing the fight. Then, test
      Awareness (Cunning). On a Hit, learn the weaknesses of your enemy (your GM
      will tell you what you learned). Leverage this knowledge to fight more
      effectively.
    </p>

    <h3>Teacher and Master</h3>
    <p>
      As <em>The Wolf</em>, you know the true value of knowledge is found in
      sharing it with others.
    </p>
    <p className={styles.text}>
      As a Rest Action, you can tell your allies about something you've learned.
      Until your next Rest, they gain +1 Forward when acting on that knowledge.
    </p>
  </div>
)

const Spider = () => (
  <div className={c(styles.role, 'sheet-role--spider')}>
    <h3>Spirit Tongue</h3>
    <p>
      As <em>The Spider</em>, you know the secret language of the spirits.
    </p>
    <p className={styles.text}>
      Test Knowledge (Weird) to speak the spirit tongue. On a Hit, you know the
      words. The flora and fauna of the wilds will understand you, and you can
      understand them. Spirits and gods will be impressed by your mastery of
      their language, and are more likely to respect you.
    </p>

    <h3>Weaver of Webs</h3>
    <p>
      As <em>The Spider</em>, you have already undergone a vision quest to
      contact a local spirit god. You start the game with a Spirit Pact.
    </p>
    <p className={styles.text}>
      Work with your GM to design an appropriate power for your spirit pact.
      Gain it now. Additionally, when you make dealings with other spirits in
      the future, do so with greater Effect.
    </p>
  </div>
)

export default () => (
  <Box id="role" label="Playbook Features">
    <Field hidden id="sheet_playbook" />
    <Bear />
    <Hawk />
    <Wolf />
    <Spider />
  </Box>
)
