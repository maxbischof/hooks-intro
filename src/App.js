import React, { useState } from 'react'
import Counter from './Counter'

function App() {
  const [number, setNumber] = useState(0)

  const adOneToNumber = () => {
    setNumber(number + 1)
  }

  const removeOneFromNumber = () => {
    setNumber(number - 1)
  }

  return (
    <div>
      <Counter
        adOneToNumber={adOneToNumber}
        removeOneFromNumber={removeOneFromNumber}
        number={number}
      />
    </div>
  )
}

export default App
