import React, { useContext } from 'react'
import Styles from './MainHeader.module.css'
import { contextMode } from '../AppLayout/AppLayout'
export default function MainHeader({children}) {
  const {mode}=useContext(contextMode)
  return (
    <h1 style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}} className={Styles.mainHeader}>{children}</h1>
  )
}
