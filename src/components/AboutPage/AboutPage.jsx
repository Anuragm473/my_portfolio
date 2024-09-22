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
    <Paragraph>Hello, I'm Anurag, and I'm more than just a software developer; I'm a digital problem solver. I've always been fascinated by the power of code, and my journey in software development has been both challenging and rewarding. My goal is to build applications that not only perform efficiently but also deliver a seamless and intuitive user experience, transforming complex problems into elegant, functional solutions.</Paragraph>
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
