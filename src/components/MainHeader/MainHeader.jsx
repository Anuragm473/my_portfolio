import React from 'react'
import Styles from './MainHeader.module.css'
export default function MainHeader({children}) {
  return (
    <h1 className={Styles.mainHeader}>{children}</h1>
  )
}
