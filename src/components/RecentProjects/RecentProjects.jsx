import React, { useContext } from 'react'
import Styles from './RecentProjects.module.css'
import Dotelement from '../Dotelement/Dotelement'
import { useNavigate } from 'react-router-dom'
import LetsConnect from '../LetsConnect/LetsConnect'
import Button from '../Button/Button'
import ProjectContainer from '../ProjectConatiner/ProjectContainer'
import { contextMode } from '../AppLayout/AppLayout'

export default function RecentProjects() {
  const {mode,profile}=useContext(contextMode)
  const project=profile.projects
    const navigate=useNavigate()
    function handleClick(){
        
        navigate('project')
    }

  return (
    <div className={Styles.projectContainer}>
      <h2 className={Styles.SecondHeader}>Recent Projects</h2>
      <div className={Styles.project}>
      <ProjectContainer url={project[0].project_img} title={project[0].project_title} projectName={project[0].project_description} projectLink={project[0].project_link}/>
      <ProjectContainer url={project[1].project_img} title={project[1].project_title} projectName={project[1].project_description} projectLink={project[1].project_link}/>
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
