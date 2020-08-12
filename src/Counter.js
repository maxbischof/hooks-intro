import React, { useState } from 'react'
import Button from './Button'

function Counter() {
  const [number, setNumber] = useState(0)

  const increaseNumber = () => {
    setNumber(number + 1)
  }

  const decreaseNumber = () => {
    setNumber(number - 1)
  }

  return <div>
  <h1>{number}</h1>
  <Button onclick={increaseNumber} text={'+'} disabled={false} />
  <Button onclick={decreaseNumber} text={'-'} disabled={!number} />
  </div>
}

export default Counter