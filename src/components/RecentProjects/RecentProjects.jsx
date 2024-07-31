import React from 'react'
import Styles from './RecentProjects.module.css'
import Dotelement from '../Dotelement/Dotelement'
import { useNavigate } from 'react-router-dom'
export default function RecentProjects() {
    const navigate=useNavigate()
    function handleClick(e){
        e.preventDefault()
        navigate('project')
    }
  return (
    <div className={Styles.projectContainer}>
      <h2 className={Styles.SecondHeader}>Recent Projects</h2>
      <div className={Styles.project}>
        <div className={Styles.projectBox}>
            <div className={Styles.imgContainer}><img className={Styles.projectImg} src='https://framerusercontent.com/images/Z7dxTgCWtUvi8m83dXEUIvSkSA4.png?scale-down-to=2048'/></div>
            <p className={Styles.projectHeading}>WEB DESIGN</p>
            <h2 className={Styles.SecondHeader}>My Recent projects</h2>
        </div>
        <div className={Styles.projectBox}>
            <div className={Styles.imgContainer}><img className={Styles.projectImg} src='https://framerusercontent.com/images/oWBuPL22H3F8LGrN7g47VwE.png'/></div>
            <p className={Styles.projectHeading}>WEB DESIGN</p>
            <h2 className={Styles.SecondHeader}>My Recent projects</h2>
        </div>
      </div>
      <div className={Styles.framer}>
            <div>
                <Dotelement/>
            </div>
            <button onClick={(e)=>handleClick(e)}>
                View all projects &#x2192;
            </button>
        </div>
        <h1 className={Styles.contact}>Let's Connect!</h1>
    </div>
  )
}
