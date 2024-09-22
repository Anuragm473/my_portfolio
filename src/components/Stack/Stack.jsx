import React, { useContext } from 'react'
import Styles from './Stack.module.css'
import Dotelement from '../Dotelement/Dotelement'
import { contextMode } from '../AppLayout/AppLayout'

export default function Stack() {
  const {mode,profile}=useContext(contextMode)
  return (
    <>
    <div className={Styles.stackContainer}>
      <h2 className={Styles.secondHeader} style={{color:mode==='dark'?'#f9f9f9':'black'}}>Stack</h2>
      <ul className={Styles.stack}>
        {profile.skills.map(skill=>
          <li className={Styles.navigate} style={{backgroundColor:mode==='dark'?'#333':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}}><img className={Styles.imageContainer} src={`${skill}.png`}/><span>{skill}</span></li>)}
        </ul>
    </div>
    <Dotelement/>
    </>
    
  )
}
