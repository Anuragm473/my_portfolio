import React, { useContext } from 'react'
import Styles from './Experience.module.css'
import Dot from '../Dot/Dot'
import { contextMode} from '../AppLayout/AppLayout';


function ExperienceBox({heading,education=0,experience=0,mode}){
    const list=education===0?experience:education;
    const length=list.length-1
    console.log(list)
    return(
        <div className={Styles.contain}>
        {
        list.map((item,index)=>{return<>
        <div key={index} className={Styles.experience}>
        <div style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}} className={Styles.icon}>{heading==='Education'?<ion-icon name="desktop-outline"></ion-icon>:<ion-icon name="ribbon-outline"></ion-icon>}</div>
        <h3 style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}} className={Styles.name}>{item.position}</h3>
        <p style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}} className={Styles.institute}>{item.company}</p>
        </div>
        {index!==length && <Dot/>}
        </>})
        }
        </div>
    )
}

export default function Experience({heading,education=0,experience=0}) {
  const {mode}=useContext(contextMode)
  return (
    <div className={Styles.conatinner}>
      <h5 style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}} className={Styles.heading}>{heading}</h5>
      <ExperienceBox mode={mode} heading={heading} education={education} experience={experience} />
    </div>
  )
}
