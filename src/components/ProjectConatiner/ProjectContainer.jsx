import React, { useContext } from 'react'
import Styles from './ProjectContainer.module.css'
import { contextMode } from '../AppLayout/AppLayout'


export default function ProjectContainer({url,title,projectName,projectLink}) {
  const {mode}=useContext(contextMode)
  return (
    <>
    <div className={Styles.projectBox}>
        <div className={Styles.imgContainer} onClick={() => window.open(projectLink, '_blank')}><img className={Styles.projectImg} src={`${url}`}/></div>
        <p className={Styles.title}>{title}</p>
        <p className={Styles.secondHeader} style={{color:mode==='dark'?'#f9f9f9':'black'}}>{projectName}</p>
    </div>
    </>
  )
}
