import React, { useContext } from 'react'
import Styles from './Location.module.css'
import { contextMode } from '../AppLayout/AppLayout'
export default function Location({children}) {
  const {mode}=useContext(contextMode)
  return (
    <div className={Styles.location} style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}}><ion-icon style={{fontSize:'2rem',color:'rgb(76, 230, 166)'}} name="location-outline"></ion-icon><span>{children}</span></div>
  )
}
