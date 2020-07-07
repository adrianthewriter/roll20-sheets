import { setRowId } from './index'

export default (sheet) => {
  /**
   * Calculate total spent CAP
   */
  sheet
    .listen([
      'change:cap-attributes',
      'change:cap-advantages',
      'change:cap-skillsets',
      'change:cap-maneuvers',
      'change:cap-techniques',
      'change:cap-abilities',
      'change:cap-gained',
    ])
    .getAttrs([
      'cap-attributes',
      'cap-advantages',
      'cap-skillsets',
      'cap-maneuvers',
      'cap-techniques',
      'cap-abilities',
      'cap-gained',
    ])
    .then(({ attrSet, setAttrs }) => {
      // Total the spent CAP
      const attrs = parseInt(attrSet['cap-attributes']) || 0
      const advs = parseInt(attrSet['cap-advantages']) || 0
      const skills = parseInt(attrSet['cap-skillsets']) || 0
      const moves = parseInt(attrSet['cap-maneuvers']) || 0
      const techs = parseInt(attrSet['cap-techniques']) || 0
      const abils = parseInt(attrSet['cap-abilities']) || 0
      const totalSpentCap = attrs + advs + skills + moves + techs + abils

      // Calculate the remaining cap
      const gainedCap = parseInt(attrSet['cap-gained']) || 0
      const unspentCap = gainedCap - totalSpentCap

      // Set the 'CAP total' and 'Unspent CAP'
      setAttrs(
        {
          ['cap-total']: totalSpentCap || 0,
          ['cap-unspent']: unspentCap || 0,
        },
        () => {
          console.log('Unspent and Total CAP updated')
        }
      )
    })

  /**
   * Calculate total gained CAP
   */
  sheet
    .listen('change', 'sessionlog')
    .getFieldsFromAllRows(
      ['session-header-toggle', 'session-cap'],
      'sessionlog'
    )
    .then(({ e, fieldSet, setAttrs }) => {
      // Filter out the headers
      const nonHeadersOnly = fieldSet.sessionlog.filter((v) => {
        return v['session-header-toggle'] === '0'
      })

      // Calculate the CAP total
      const reducer = (totalCap, v) => {
        const capGained = parseInt(v['session-cap']) || 0
        return (totalCap += capGained)
      }
      const capTotal = nonHeadersOnly.map((el) => el).reduce(reducer, 0)

      // Return the CAP total
      setAttrs(
        {
          ['cap-gained']: capTotal || 0,
        },
        () => {
          console.log('Gained CAP set to ', capTotal)
        }
      )
    })

  /**
   * Calculate total attributes CAP cost
   */
  sheet
    .listen([
      'change:iq',
      'change:wl',
      'change:aw',
      'change:st',
      'change:ag',
      'change:sm',
    ])
    .getAttrs(['iq', 'wl', 'aw', 'st', 'ag', 'sm'])
    .then(({ attrSet, setAttrs }) => {
      // Calculate the CAP total
      const reducer = (totalCap, v) => {
        const level = parseInt(v) - 10 || 0
        const capCost = level >= 0 ? level * 50 : level * 25
        return (totalCap += capCost)
      }
      const capTotal = Object.values(attrSet)
        .map((el) => el)
        .reduce(reducer, 0)

      // Set the 'CAP total'
      setAttrs(
        {
          ['cap-attributes']: capTotal || 0,
        },
        () => {
          console.log('Attributes total CAP set to ', capTotal)
        }
      )
    })

  /**
   * Calculate total advantages CAP cost
   */
  sheet
    .listen('change', 'advantage')
    .getFieldsFromAllRows(
      ['advantage-header-toggle', 'advantage-cap'],
      'advantage'
    )
    .then(({ e, fieldSet, setAttrs }) => {
      // Start by setting the row id
      setRowId('advantage', 'advantage', { e, setAttrs })

      // Filter out the headers
      const nonHeadersOnly = fieldSet.advantage.filter((v) => {
        return v['advantage-header-toggle'] === '0'
      })

      // Calculate the CAP total
      const reducer = (totalCap, v) => {
        const capCost = parseInt(v['advantage-cap']) || 0
        return (totalCap += capCost)
      }
      const capTotal = nonHeadersOnly.map((el) => el).reduce(reducer, 0)

      // Return the CAP total
      setAttrs(
        {
          ['cap-advantages']: capTotal || 0,
        },
        () => {
          console.log('Advantages total CAP set to ', capTotal)
        }
      )
    })

  /**
   * Calculate total skillsets CAP cost
   */
  sheet
    .listen('change', 'skills')
    .getFieldsFromAllRows(['skill-skillset-toggle', 'skill-level'], 'skills')
    .then(({ e, fieldSet, setAttrs }) => {
      // Start by setting the row id
      setRowId('skills', 'skill', { e, setAttrs })

      // Filter out the sub-skills
      const skillsetsOnly = fieldSet.skills.filter((v) => {
        return v['skill-skillset-toggle'] != '0'
      })

      // Calculate the CAP total
      const reducer = (totalCap, v) => {
        const skillLevel = parseInt(v['skill-level']) || 0
        const skillCapCost = (skillLevel * (skillLevel + 1)) / 2
        return (totalCap += skillCapCost)
      }
      const capTotal = skillsetsOnly.map((el) => el).reduce(reducer, 0)

      // Return the CAP total
      setAttrs(
        {
          ['cap-skillsets']: capTotal || 0,
        },
        () => {
          console.log('Skillset total CAP set to ', capTotal)
        }
      )
    })

  /**
   * Calculate total maneuvers CAP cost
   */
  sheet
    .listen([
      'change:swing-level',
      'change:thrust-level',
      'change:throw-level',
      'change:shoot-level',
      'change:parry-level',
      'change:block-level',
      'change:evade-level',
    ])
    .getAttrs([
      'swing-level',
      'thrust-level',
      'throw-level',
      'shoot-level',
      'parry-level',
      'block-level',
      'evade-level',
    ])
    .then(({ attrSet, setAttrs }) => {
      // Calculate the CAP total
      const reducer = (totalCap, v) => {
        const level = parseInt(v) || 0
        const capCost = (level * (level + 1)) / 2
        return (totalCap += capCost)
      }
      const capTotal = Object.values(attrSet)
        .map((el) => el)
        .reduce(reducer, 0)

      // Set the 'CAP total'
      setAttrs(
        {
          ['cap-maneuvers']: capTotal || 0,
        },
        () => {
          console.log('Maneuvers total CAP set to ', capTotal)
        }
      )
    })

  /**
   * Calculate total techniques CAP cost
   */
  sheet
    .listen('change', 'technique')
    .getFieldsFromAllRows(
      ['technique-header-toggle', 'technique-cap'],
      'technique'
    )
    .then(({ e, fieldSet, setAttrs }) => {
      // Start by setting the row id
      setRowId('technique', 'technique', { e, setAttrs })

      // Filter out the headers
      const nonHeadersOnly = fieldSet.technique.filter((v) => {
        return v['technique-header-toggle'] === '0'
      })

      // Calculate the CAP total
      const reducer = (totalCap, v) => {
        const capCost = parseInt(v['technique-cap']) || 0
        return (totalCap += capCost)
      }
      const capTotal = nonHeadersOnly.map((el) => el).reduce(reducer, 0)

      // Return the CAP total
      setAttrs(
        {
          ['cap-techniques']: capTotal || 0,
        },
        () => {
          console.log('Techniques total CAP set to ', capTotal)
        }
      )
    })

  /**
   * Calculate total prayers CAP cost
   */
  sheet
    .listen('change', 'prayer')
    .getFieldsFromAllRows(['prayer-header-toggle', 'prayer-cap'], 'prayer')
    .then(({ e, fieldSet, setAttrs }) => {
      // Start by setting the row id
      setRowId('prayer', 'prayer', { e, setAttrs })

      // Filter out the headers
      const nonHeadersOnly = fieldSet.prayer.filter((v) => {
        return v['prayer-header-toggle'] === '0'
      })

      // Calculate the CAP total
      const reducer = (totalCap, v) => {
        const capCost = parseInt(v['prayer-cap']) || 0
        return (totalCap += capCost)
      }
      const capTotal = nonHeadersOnly.map((el) => el).reduce(reducer, 0)

      // Return the CAP total
      setAttrs(
        {
          ['cap-abilities']: capTotal || 0,
        },
        () => {
          console.log('Abilities total CAP set to ', capTotal)
        }
      )
    })
}
