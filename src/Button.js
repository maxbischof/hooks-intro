import React from 'react'

function Button(props) {
  return <button onClick={props.onclick} disabled={props.disabled}>{props.text}</button>
}

export default Button