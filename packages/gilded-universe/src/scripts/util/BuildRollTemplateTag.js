const buildRollTemplate = (id, propsObj = false) => {
  if (typeof id === 'object') {
    propsObj = id
    id = false
  }
  const propsArray = Object.entries(propsObj).map(([key, val]) => {
    return id ? `{{${key}=${val}}}` : `{{${key}=${val}&#125;&#125;`
  })
  return id
    ? `&{template:${id}} ${propsArray.filter((x) => x).join(' ')}`
    : propsArray.filter((x) => x).join(' ')
}

const buildRollQuery = (query, ...optsObj) => {
  console.log('----->', query, optsObj)
  // const optsArray = Object.entries(opsObj).map([])
  //   ?{Maneuver
  //   |Swing,{{move=Swing&#125;&#125; {{attack=[[2d6+(@{swing})+(@{weapon-swing})+(@{weapon-offhand-toggle})+(?{Attack modifier&#124;+0&#125;)]]&#125;&#125;
  //   |Thrust,{{move=Thrust&#125;&#125; {{attack=[[2d6+(@{thrust})+(@{weapon-thrust})+(@{weapon-offhand-toggle})+(?{Attack modifier&#124;+0&#125;)]]&#125;&#125;
  //   |Throw,{{move=Throw&#125;&#125; {{attack=[[2d6+(@{throw})+(@{weapon-throw})+(@{weapon-offhand-toggle})+(?{Attack modifier&#124;+0&#125;)]]&#125;&#125;}`
}

export { buildRollTemplate, buildRollQuery }
