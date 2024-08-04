import React from 'react'
import Styles from './Experience.module.css'
import Dot from '../Dot/Dot'

function ExperienceBox({heading,education=0,experience=0}){
    const list=education===0?experience:education;
    const length=list.length
    console.log(list)
    return(
        <div className={Styles.contain}>
        {
        list.map((item,index)=>{return<>
        <div key={index} className={Styles.experience}>
        <div className={Styles.icon}>{heading==='Education'?<ion-icon name="desktop-outline"></ion-icon>:<ion-icon name="ribbon-outline"></ion-icon>}</div>
        <h3 className={Styles.name}>{item.position}</h3>
        <p className={Styles.institute}>{item.company}</p>
        </div>
        <Dot/>
        </>})
        }
        </div>
    )
}

export default function Experience({heading,education=0,experience=0}) {
  return (
    <div className={Styles.conatinner}>
      <h5 className={Styles.heading}>{heading}</h5>
      <ExperienceBox heading={heading} education={education} experience={experience} />
    </div>
  )
}
