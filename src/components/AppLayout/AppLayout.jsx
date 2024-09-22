import React, { createContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Styles from './AppLayout.module.css'

export const contextMode=createContext()

export default function AppLayout() {
  const userProfile = {
    email: "anurag47mishra@gmail.com",
    username: "Anurag",
    name: "Anurag",
    im: "myimage.jpeg",
    location: "Vasai-virar,Mumbai",
    linkedin: "https://www.linkedin.com/in/anurag-mishra-ba1a27271/",
    instagram: "https://www.instagram.com/_.anuragmishra._/",
    github: "https://github.com/Anuragm473",
    about: "A dedicated full-stack MERN developer with a passion for building robust, scalable web applications. Proficient in creating seamless user experiences and optimizing backend systems, I thrive on transforming complex problems into efficient, innovative solutions using MongoDB, Express.js, React, and Node.js. Whether it’s developing responsive front-end interfaces or architecting powerful back-end services, I’m driven by a love for clean code and impactful digital experiences.",
    imgUrl: "myimage.jpeg",
    skills: [
      'React','Express','Node.js','MongoDB','Python','JavaScript','Git','GitHub','HTML5','CSS3','Docker','Redux','Bootstrap','Firebase','MySQL','Redis','Tailwind CSS'
    ],
    experience: [
      {
        position:'React Developer',
        company:'Caterersnearme, 2024 Auguest - present'
      },{
        position:'MERN Developer',
        company:'Pexilim, 2024 June - 2024 Auguest'
      }
    ],
    projects: [
      {
        project_img: "wildoasis.png",
        project_title: "LodgeManager",
        project_time: "",
        project_description: "Manage Booking in a single go",
        project_link: "https://wild-oasis-ten-orpin.vercel.app/",
        project_tags: [],
      },
      {
        project_img: "fastreactpizza.png",
        project_title: "Fast React Pizza",
        project_time: "",
        project_description: "Pizza ordering website",
        project_link: "https://fast-react-pizza-ten-weld.vercel.app/",
        project_tags: [],
      },{
        project_img: "natours.png",
        project_title: "Traveling website",
        project_time: "",
        project_description: "Book your tours now",
        project_link: "https://natours-ifv2.vercel.app/",
        project_tags: []
      },
      {
        project_img: "omnifood.png",
        project_title: "Food website",
        project_time: "",
        project_description: "Get tasty meals in one click",
        project_link: "https://omni-food-swart.vercel.app/",
        project_tags: []
      }
    ],
    education: [{
      position:"Bachelor's Degree in Engineering",
      company:'Theem College of Engineering, 2025'
    },{
      position:"Higher Secondary Education",
      company:'Abhinav College, 2021'
    },{
      position:"High School education",
      company:'St.Aloysius High School, 2019'
    }],
    resumeLink: "",
  };
  const [profile,setUserProfile]=useState(userProfile)
  const [mode,setMode]=useState("dark")
  const [isOpen,setIsOpen]=useState(false)
  const navigate=useNavigate()
  const setState=()=>setIsOpen(isOpen=>!isOpen)
  useEffect(function(){
    if(mode==='dark'){
    document.querySelector('body').style.backgroundColor='rgb(5, 5, 5)';
    }else{
      document.querySelector('body').style.backgroundColor='#f3f4f6';
    }
  },[mode])
  return (
    <contextMode.Provider value={{
      mode,
      profile
    }}>
    <main className={Styles.mainLayout}>
    <aside className={Styles.layout} style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f9fafb',borderRight:mode==='dark'?'1px  solid #4b5563':'1px  solid #d1d5db'}}>
      <div className={Styles.socialGap}>
        <div className={Styles.MainNavigate}>
      <div className={Styles.tab}>
        <div className={Styles.profile}>
      <img className={Styles.profileImg} src={`${profile.imgUrl}`} alt='User Profile Image'/>
      <div className={Styles.available}>
        &#9679; Available for work
      </div>
      </div>
      <div onClick={setState} className={Styles.tags}>
      <ion-icon  name={isOpen?"close-outline":"menu-outline"}></ion-icon>
      </div>
      </div>
      <div className={Styles.modall} style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f9fafb'}}>
      <div className={Styles.nav}>
        <ul className={Styles.navigation}>
          <li className={Styles.navigate} style={{color:mode==='dark'?'#f9f9f9':'black'}} onClick={()=>{navigate('/')
            setIsOpen(false)
          }}><ion-icon name="home-outline"></ion-icon><span>Home</span></li>
          <li className={Styles.navigate} style={{color:mode==='dark'?'#f9f9f9':'black'}} onClick={()=>{navigate('/about')
            setIsOpen(false)
          }}><ion-icon name="person-circle-outline"></ion-icon><span>About</span></li>
          <li className={Styles.navigate} style={{color:mode==='dark'?'#f9f9f9':'black'}} onClick={()=>{navigate('/project')
            setIsOpen(false)
          }}><ion-icon name="briefcase-outline"></ion-icon><span>Project</span></li>
          <li className={Styles.navigate} style={{color:mode==='dark'?'#f9f9f9':'black'}} onClick={()=>{navigate('/contact')
            setIsOpen(false)
          }}><ion-icon name="mail-outline"></ion-icon>Contact</li>
        </ul>
      </div>
      <ul className={Styles.social} style={{ color: mode === 'dark' ? '#f9f9f9' : 'black' }}>
            <span className={Styles.iconWrapper} onClick={() => window.open(profile.linkedin, '_blank')}>
              <ion-icon name="logo-linkedin"></ion-icon>
            </span>
            <span className={Styles.iconWrapper} onClick={() => window.open(profile.twitter || '#', '_blank')}>
              <ion-icon name="logo-twitter"></ion-icon>
            </span>
            <span className={Styles.iconWrapper} onClick={() => window.open(profile.instagram, '_blank')}>
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
            <span className={Styles.iconWrapper} onClick={() => window.open(profile.github, '_blank')}>
              <ion-icon name="logo-github"></ion-icon>
            </span>
          </ul>
      </div>
      {isOpen && <div className={Styles.modal} style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f9fafb'}}>
      <div className={Styles.nav}>
        <ul className={Styles.navigation}>
          <li className={Styles.navigate} style={{color:mode==='dark'?'#f9f9f9':'black'}} onClick={()=>{navigate('/')
            setIsOpen(false)
          }}><ion-icon name="home-outline"></ion-icon><span>Home</span></li>
          <li className={Styles.navigate} style={{color:mode==='dark'?'#f9f9f9':'black'}} onClick={()=>{navigate('/about')
            setIsOpen(false)
          }}><ion-icon name="person-circle-outline"></ion-icon><span>About</span></li>
          <li className={Styles.navigate} style={{color:mode==='dark'?'#f9f9f9':'black'}} onClick={()=>{navigate('/project')
            setIsOpen(false)
          }}><ion-icon name="briefcase-outline"></ion-icon><span>Project</span></li>
          <li className={Styles.navigate} style={{color:mode==='dark'?'#f9f9f9':'black'}} onClick={()=>{navigate('/contact')
            setIsOpen(false)
          }}><ion-icon name="mail-outline"></ion-icon>Contact</li>
        </ul>
      </div>
      <ul className={Styles.social} style={{ color: mode === 'dark' ? '#f9f9f9' : 'black' }}>
            <span className={Styles.iconWrapper} onClick={() => window.open(profile.linkedin, '_blank')}>
              <ion-icon name="logo-linkedin"></ion-icon>
            </span>
            <span className={Styles.iconWrapper} onClick={() => window.open(profile.twitter || '#', '_blank')}>
              <ion-icon name="logo-twitter"></ion-icon>
            </span>
            <span className={Styles.iconWrapper} onClick={() => window.open(profile.instagram, '_blank')}>
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
            <span className={Styles.iconWrapper} onClick={() => window.open(profile.github, '_blank')}>
              <ion-icon name="logo-github"></ion-icon>
            </span>
          </ul>
      </div>}
      </div>
      </div>
    </aside>
    <section className={Styles.mainSection}>
    <Outlet/>
    </section>
    </main>
    </contextMode.Provider>
  )
}
