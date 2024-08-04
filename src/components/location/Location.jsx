import React from 'react'
import Styles from './Location.module.css'
export default function Location({children}) {
  return (
    <div className={Styles.location}><ion-icon style={{fontSize:'2rem',color:'rgb(76, 230, 166)'}} name="location-outline"></ion-icon><span>{children}</span></div>
  )
}
