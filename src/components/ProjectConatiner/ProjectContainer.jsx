import React from 'react'
import Styles from './ProjectContainer.module.css'


export default function ProjectContainer({url,title,projectName}) {
  return (
    <>
    <div className={Styles.projectBox}>
        <div className={Styles.imgContainer}><img className={Styles.projectImg} src={`${url}`}/></div>
        <p className={Styles.projectHeading}>{title}</p>
        <h2 className={Styles.SecondHeader}>{projectName}</h2>
    </div>
    </>
  )
}
