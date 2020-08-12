import React from 'react'
import Button from './Button'

function Counter({increaseNumber, decreaseNumber, number}) {
  return <div>
  <h1>{number}</h1>
  <Button onclick={increaseNumber} text={'+'} disabled={false} />
  <Button onclick={decreaseNumber} text={'-'} disabled={!number} />
  </div>
}

export default Counter