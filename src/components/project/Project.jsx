import React from 'react'
import Styles from './Project.module.css'
import MainHeader from '../MainHeader/MainHeader'
import Dotelement from '../Dotelement/Dotelement'
import Paragraph from '../paragraph/Paragraph'
import Location from '../location/Location'
import Button from '../Button/Button'
import ProjectContainer from '../ProjectConatiner/ProjectContainer'
import LetsConnect from '../LetsConnect/LetsConnect'

export default function Project() {
  return (
    <main className={Styles.mainContainer}>
        <MainHeader>My Remarkable Projects</MainHeader>
        <div className={Styles.projectgrid}>
        <ProjectContainer url='https://framerusercontent.com/images/Z7dxTgCWtUvi8m83dXEUIvSkSA4.png?scale-down-to=2048' title='WEB DESIGN' projectName='My Recent projects'/>
        <ProjectContainer url='https://framerusercontent.com/images/oWBuPL22H3F8LGrN7g47VwE.png' title='WEB DESIGN' projectName='My Recent projects'/>
        <ProjectContainer url='https://framerusercontent.com/images/Z7dxTgCWtUvi8m83dXEUIvSkSA4.png?scale-down-to=2048' title='WEB DESIGN' projectName='My Recent projects'/>
        <ProjectContainer url='https://framerusercontent.com/images/oWBuPL22H3F8LGrN7g47VwE.png' title='WEB DESIGN' projectName='My Recent projects'/>
        </div>
        <LetsConnect/>
    </main>
  )
}
