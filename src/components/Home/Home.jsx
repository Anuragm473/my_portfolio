import React from 'react'
import Styles from './Home.module.css'
import Dotelement from '../Dotelement/Dotelement'
import RecentProjects from '../RecentProjects/RecentProjects'
import MainHeader from '../MainHeader/MainHeader'
import Stack from '../Stack/Stack'
import LetsConnect from '../LetsConnect/LetsConnect'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate=useNavigate()
  return (
    <main className={Styles.homeContainer}>
        <div className={Styles.about}>
        <MainHeader>Hello Everyone! I'm Patricia.</MainHeader>
        <p className={Styles.paragrapgh}>A passionate web designer with a knack for turning ideas into visually stunning, user-friendly websites.</p>
        
        <div className={Styles.framer}>
            <div className={Styles.location}><ion-icon style={{fontSize:'2rem',color:'rgb(76, 230, 166)'}} name="location-outline"></ion-icon><span>London, United Kingdom</span></div>
            <div>
                <Dotelement/>
            </div>
            <button onClick={()=>navigate('/about')}>
                More About me &#x2192;
            </button>
        </div>
        </div>
        <RecentProjects/>
        <Stack/>
        <LetsConnect/>
    </main>
  )
}
