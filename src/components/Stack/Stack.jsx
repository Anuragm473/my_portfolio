import React from 'react'
import Styles from './Stack.module.css'
import Dotelement from '../Dotelement/Dotelement'

export default function Stack() {
  return (
    <>
    <div className={Styles.stackContainer}>
      <h2 className={Styles.SecondHeader}>Stack</h2>
      <ul className={Styles.stack}>
          <li className={Styles.navigate} ><ion-icon name="logo-react"></ion-icon><span>React</span></li>
          <li className={Styles.navigate} ><ion-icon name="logo-figma"></ion-icon><span>Figma</span></li>
          <li className={Styles.navigate} ><ion-icon name="logo-nodejs"></ion-icon><span>nodejs</span></li>
          <li className={Styles.navigate} ><ion-icon name="logo-github"></ion-icon>Github</li>
        </ul>
    </div>
    <Dotelement/>
    </>
    
  )
}
