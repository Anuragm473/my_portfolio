import React from 'react'
import Styles from './RecentProjects.module.css'
import Dotelement from '../Dotelement/Dotelement'
import { useNavigate } from 'react-router-dom'
import LetsConnect from '../LetsConnect/LetsConnect'
import Button from '../Button/Button'
import ProjectContainer from '../ProjectConatiner/ProjectContainer'

export default function RecentProjects() {

    const navigate=useNavigate()
    function handleClick(){
        
        navigate('project')
    }

  return (
    <div className={Styles.projectContainer}>
      <h2 className={Styles.SecondHeader}>Recent Projects</h2>
      <div className={Styles.project}>
        <ProjectContainer url='https://framerusercontent.com/images/Z7dxTgCWtUvi8m83dXEUIvSkSA4.png?scale-down-to=2048' title='WEB DESIGN' projectName='My Recent projects'/>
        <ProjectContainer url='https://framerusercontent.com/images/oWBuPL22H3F8LGrN7g47VwE.png' title='WEB DESIGN' projectName='My Recent projects'/>
      </div>
      <div className={Styles.framer}>
            <div>
                <Dotelement/>
            </div>
                <Button onClick={()=>handleClick()}>View all projects &#x2192;</Button>
        </div>
    </div>
  )
}
