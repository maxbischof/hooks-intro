import React from 'react'

function Button({onclick, disabled, text}) {
  return <button onClick={onclick} disabled={disabled}>{text}</button>
}

export default Button