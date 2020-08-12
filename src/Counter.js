import React from 'react'
import Button from './Button'

function Counter(props) {
  return <div>
  <h1>{props.number}</h1>
  <Button onclick={props.increaseNumber} text={'+'} disabled={false} />
  <Button onclick={props.decreaseNumber} text={'-'} disabled={!props.number} />
  </div>
}

export default Counter