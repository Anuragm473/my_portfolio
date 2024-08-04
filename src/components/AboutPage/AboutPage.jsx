import React from 'react'
import MainHeader from '../MainHeader/MainHeader'
import Styles from './AboutPage.module.css'
import Paragraph from '../paragraph/Paragraph'
import Location from '../location/Location'
import Dotelement from '../Dotelement/Dotelement'
import Experience from '../experience/Experience'
import LetsConnect from '../LetsConnect/LetsConnect'

export default function AboutPage() {
   const education=[{
    position:"Bachelor's Degree in Web Design and Development",
    company:'XYZ University, 2010'
  },{
    position:"Certification in User Experience (UX) Design",
    company:'UXUI Institute, 2012'
  }]

  const experience=[{
    position:'Freelance Web Designer',
    company:'InnovateTech Inc., 2020 - present'
  },{
    position:'Lead Designer',
    company:'XYZ Creative Agency, 2015 - 2019'
  },{
    position:'Senior Web Designer',
    company:'ABC Web Studio, 2010 - 2015'
  }]
  return (
    <>
    <div className={Styles.mainContainer}>
    <MainHeader>Get to Know Me</MainHeader>
    <Paragraph>Hello, I'm Patricia, and I'm more than just a web designer; I'm a digital storyteller. I have always been captivated by the art of web design, and my journey in this field has been nothing short of exhilarating. My goal is to craft websites that not only look beautiful but also function seamlessly, providing an exceptional user experience.</Paragraph>
    <div className={Styles.locationContainer}>
    <Location>London, United Kingdom</Location>
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
