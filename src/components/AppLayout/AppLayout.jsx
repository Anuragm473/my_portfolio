import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Styles from './AppLayout.module.css'

export default function AppLayout() {
  const navigate=useNavigate()
  return (
    <main className={Styles.mainLayout}>
    <aside className={Styles.layout}>
      <div className={Styles.socialGap}>
        <div className={Styles.MainNavigate}>
      <img className={Styles.profileImg} src='https://framerusercontent.com/images/iTTje84cuPl3KGKsd8HjMBFO0.jpg?scale-down-to=512' alt='User Profile Image'/>
      <div className={Styles.available}>
        &#9679; Available for work
      </div>
      <div>
        <ul className={Styles.navigation}>
          <li className={Styles.navigate} onClick={()=>navigate('/')}><ion-icon name="home-outline"></ion-icon><span>Home</span></li>
          <li className={Styles.navigate} onClick={()=>navigate('/about')}><ion-icon name="person-circle-outline"></ion-icon><span>About</span></li>
          <li className={Styles.navigate} onClick={()=>navigate('/project')}><ion-icon name="briefcase-outline"></ion-icon><span>Project</span></li>
          <li className={Styles.navigate} onClick={()=>navigate('/contact')}><ion-icon name="mail-outline"></ion-icon>Contact</li>
        </ul>
      </div>
      </div>
      <ul className={Styles.social}>
        <li><ion-icon name="logo-linkedin"></ion-icon></li>
        <li><ion-icon name="logo-twitter"></ion-icon></li>
        <li><ion-icon name="logo-instagram"></ion-icon></li>
        <li><ion-icon name="logo-github"></ion-icon></li>
      </ul>
      </div>
    </aside>
    <section className={Styles.mainSection}>
    <Outlet/>
    </section>
    </main>
  )
}
