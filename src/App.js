import React, { useState } from 'react'
import Counter from './Counter'

function App() {
  const [number, setNumber] = useState(0)

  const increaseNumber = () => {
    setNumber(number + 1)
  }

  const decreaseNumber = () => {
    setNumber(number - 1)
  }

  return (
    <div>
      <Counter
        increaseNumber={increaseNumber}
        decreaseNumber={decreaseNumber}
        number={number}
      />
    </div>
  )
}

export default App
