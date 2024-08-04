import React from 'react'
import './Button.module.css'
export default function Button({children,onClick}) {
  return (
    <button onClick={onClick}>
        {children}
    </button>
  )
}
