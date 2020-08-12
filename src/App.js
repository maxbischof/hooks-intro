import React, {useState} from 'react'

function App() {
  const [number, setNumber] = useState(0)

  const adOneToNumber = () => {
    setNumber(number+1)
  }

  const removeOneFromNumber = () => {
    setNumber(number-1)
  }

  return <div>
    <h1>{number}</h1>
    <button onClick={adOneToNumber}>+</button>
    {/* {number ? <button onClick={removeOneFromNumber}>-</button> : ''} */}
    <button onClick={removeOneFromNumber} disabled={number ? false : true}>-</button>
    </div>
}



export default App
