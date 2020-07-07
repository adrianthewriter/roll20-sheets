import React from 'react'

const isProd = process.env.NODE_ENV === 'production'

export default ({ name, placeholder, logic, ...props }) => {
  if (logic && isProd) {
    return (
      <>
        {`{{#${logic}}}`}
        {props.children}
        {`{{/${logic}}}`}
      </>
    )
  } else if (logic && !isProd) {
    return <>{props.children}</>
  } else if (name && isProd) {
    return <>{`{{${name}}}`}</>
  } else if (name && !isProd) {
    return <>{placeholder}</>
  } else {
    return null
  }
}
