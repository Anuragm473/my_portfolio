import React, { useContext } from 'react'
import Styles from './Project.module.css'
import MainHeader from '../MainHeader/MainHeader'
import ProjectContainer from '../ProjectConatiner/ProjectContainer'
import LetsConnect from '../LetsConnect/LetsConnect'
import { contextMode } from '../AppLayout/AppLayout'

export default function Project() {
  const {profile}=useContext(contextMode)
  return (
    <main className={Styles.mainContainer}>
        <MainHeader>My Remarkable Projects</MainHeader>
        <div className={Styles.projectgrid}>
        {profile.projects.map(project=>{return(<ProjectContainer url={project.project_img} title={project.project_title} projectName={project.project_description} projectLink={project.project_link}/>)})}
      
        </div>
        <LetsConnect/>
    </main>
  )
}
