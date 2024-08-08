import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Styles from './AppLayout.module.css'

export default function AppLayout() {
  const [isOpen,setIsOpen]=useState(true)
  const navigate=useNavigate()
  const setState=()=>setIsOpen(isOpen=>!isOpen)
  return (
    <main className={Styles.mainLayout}>
    <aside className={Styles.layout}>
      <div className={Styles.socialGap}>
        <div className={Styles.MainNavigate}>
      <div className={Styles.tab}>
        <div className={Styles.profile}>
      <img className={Styles.profileImg} src='https://framerusercontent.com/images/iTTje84cuPl3KGKsd8HjMBFO0.jpg?scale-down-to=512' alt='User Profile Image'/>
      <div className={Styles.available}>
        &#9679; Available for work
      </div>
      </div>
      <div onClick={setState} className={Styles.tags}>
      <ion-icon  name={isOpen?"close-outline":"menu-outline"}></ion-icon>
      </div>
      </div>
      {isOpen && <div className={Styles.modal}>
      <div className={Styles.nav}>
        <ul className={Styles.navigation}>
          <li className={Styles.navigate} onClick={()=>navigate('/')}><ion-icon name="home-outline"></ion-icon><span>Home</span></li>
          <li className={Styles.navigate} onClick={()=>navigate('/about')}><ion-icon name="person-circle-outline"></ion-icon><span>About</span></li>
          <li className={Styles.navigate} onClick={()=>navigate('/project')}><ion-icon name="briefcase-outline"></ion-icon><span>Project</span></li>
          <li className={Styles.navigate} onClick={()=>navigate('/contact')}><ion-icon name="mail-outline"></ion-icon>Contact</li>
        </ul>
      </div>
      <ul className={Styles.social}>
        <li><ion-icon name="logo-linkedin"></ion-icon></li>
        <li><ion-icon name="logo-twitter"></ion-icon></li>
        <li><ion-icon name="logo-instagram"></ion-icon></li>
        <li><ion-icon name="logo-github"></ion-icon></li>
      </ul>
      </div>
}
      </div>
      </div>
    </aside>
    <section className={Styles.mainSection}>
    <Outlet/>
    </section>
    </main>
  )
}
