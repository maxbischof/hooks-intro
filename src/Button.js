import React from 'react'
import './Button.css'

function Button({ onclick, disabled, text }) {
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className={'btn ' + (text === '+' ? 'btn-green' : 'btn-red')}
    >
      {text}
    </button>
  )
}

export default Button
