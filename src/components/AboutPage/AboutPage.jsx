import React, { useContext } from 'react'
import MainHeader from '../MainHeader/MainHeader'
import Styles from './AboutPage.module.css'
import Paragraph from '../paragraph/Paragraph'
import Location from '../location/Location'
import Dotelement from '../Dotelement/Dotelement'
import Experience from '../experience/Experience'
import LetsConnect from '../LetsConnect/LetsConnect'
import { contextMode } from '../AppLayout/AppLayout'

export default function AboutPage() {
  const {mode,profile}=useContext(contextMode)
   const education=profile.education

  const experience=profile.experience
  return (
    <>
    <div className={Styles.mainContainer} style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}}>
    <MainHeader>Get to Know Me</MainHeader>
    <Paragraph>Hello, I'm {profile.name}, and I'm more than just a web designer; I'm a digital storyteller. I have always been captivated by the art of web design, and my journey in this field has been nothing short of exhilarating. My goal is to craft websites that not only look beautiful but also function seamlessly, providing an exceptional user experience.</Paragraph>
    <div className={Styles.locationContainer}>
    <Location>{profile.location}</Location>
    <Dotelement/>
    </div>
    <Experience heading='Education' education={education} />
    <Dotelement/>
    <Experience heading='Experience' experience={experience} />
    <Dotelement/>
    </div>
    <LetsConnect/>
    </>
  )
}
