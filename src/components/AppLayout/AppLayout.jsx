import React, { createContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Styles from './AppLayout.module.css'

export const contextMode=createContext()

export default function AppLayout() {
  const userProfile = {
    _id: "669bb705dcf25c14eb581678",
    email: "anurag47mishra@gmail.com",
    username: "anurag",
    name: "anurag",
    im: "https://framerusercontent.com/images/iTTje84cuPl3KGKsd8HjMBFO0.jpg?scale-down-to=512",
    location: "Vasai-virar,mumbai",
    linkedin: "https://www.linkedin.com/in/anurag-mishra-ba1a27271/",
    instagram: "https://www.instagram.com/_.anuragmishra._/",
    github: "https://github.com/Anuragm473",
    about: "A passionate web designer with a knack for turning ideas into visually stunning, user-friendly websites.",
    imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-generator-website.appspot.com/o/person.png?alt=media&token=18d48a8b-055b-414a-ada4-9c4bf2dbbb19",
    skills: [
      'github','react','nodejs','angular'
    ],
    isPro: false,
    isHosted: true,
    templateName: 1,
    experience: [
      {
        position:'Freelance Web Designer',
        company:'InnovateTech Inc., 2020 - present'
      },{
        position:'Lead Designer',
        company:'XYZ Creative Agency, 2015 - 2019'
      },{
        position:'Senior Web Designer',
        company:'ABC Web Studio, 2010 - 2015'
      }
    ],
    projects: [
      {
        project_img: "https://framerusercontent.com/images/Z7dxTgCWtUvi8m83dXEUIvSkSA4.png?scale-down-to=2048",
        project_title: "WEB DESIGN",
        project_time: "",
        project_description: "My Recent projects",
        project_link: "Link here",
        project_tags: [],
        isShow: true,
        _id: "66963d3227fb4d61bf88db79"
      },
      {
        project_img: "https://framerusercontent.com/images/oWBuPL22H3F8LGrN7g47VwE.png",
        project_title: "WEB DESIGN",
        project_time: "",
        project_description: "My recent Project",
        project_link: "zx",
        project_tags: [],
        isShow: true,
        _id: "66963d3d27fb4d61bf88db7e"
      },{
        project_img: "https://framerusercontent.com/images/Z7dxTgCWtUvi8m83dXEUIvSkSA4.png?scale-down-to=2048",
        project_title: "WEB DESIGN",
        project_time: "",
        project_description: "My Recent projects",
        project_link: "Link here",
        project_tags: [],
        isShow: true,
        _id: "66963d3227fb4d61bf88db79"
      },
      {
        project_img: "https://framerusercontent.com/images/oWBuPL22H3F8LGrN7g47VwE.png",
        project_title: "WEB DESIGN",
        project_time: "",
        project_description: "My recent Project",
        project_link: "zx",
        project_tags: [],
        isShow: true,
        _id: "66963d3d27fb4d61bf88db7e"
      }
    ],
    education: [{
      position:"Bachelor's Degree in Web Design and Development",
      company:'XYZ University, 2010'
    },{
      position:"Certification in User Experience (UX) Design",
      company:'UXUI Institute, 2012'
    }],
    createdAt: new Date(1709905580400),
    __v: 21,
    facebook: "",
    otherLink: "",
    resumeLink: "",
    messages: []
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
    <div className={Styles.mode} onClick={()=>setMode(mode=>mode==="dark"?"light":"dark")}>
      {mode==="dark"?
      <span
        class="material-symbols-outlined"
        style={{ color: "white", fontSize: "30px" }}
      >
        light_mode
      </span>:
      <span class="material-symbols-outlined" style={{ color: "black", fontSize: "30px" }}>dark_mode</span>}
      </div>
    <Outlet/>
    </section>
    </main>
    </contextMode.Provider>
  )
}
