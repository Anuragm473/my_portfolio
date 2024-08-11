import React, { useContext } from 'react'
import Styles from './ProjectContainer.module.css'
import { contextMode } from '../AppLayout/AppLayout'


export default function ProjectContainer({url,title,projectName,projectLink}) {
  const {mode}=useContext(contextMode)
  return (
    <>
    <div className={Styles.projectBox}>
        <div className={Styles.imgContainer} onClick={() => window.open(projectLink, '_blank')}><img className={Styles.projectImg} src={`${url}`}/></div>
        <p className={Styles.projectHeading}>{title}</p>
        <h2 style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}} className={Styles.SecondHeader}>{projectName}</h2>
    </div>
    </>
  )
}
