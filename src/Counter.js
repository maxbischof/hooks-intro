import React from 'react'
import Button from './Button'

function Counter(props) {
  return <div>
  <h1>{props.number}</h1>
  <Button onclick={props.adOneToNumber} text={'+'} disabled={false} />
  <Button onclick={props.removeOneFromNumber} text={'-'} disabled={!props.number} />
  </div>
}

export default Counter