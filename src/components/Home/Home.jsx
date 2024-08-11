import React, { useContext } from "react";
import Styles from "./Home.module.css";
import Dotelement from "../Dotelement/Dotelement";
import RecentProjects from "../RecentProjects/RecentProjects";
import MainHeader from "../MainHeader/MainHeader";
import Stack from "../Stack/Stack";
import LetsConnect from "../LetsConnect/LetsConnect";
import { useNavigate } from "react-router-dom";
import { contextMode } from "../AppLayout/AppLayout";
export default function Home() {
  const navigate = useNavigate();
  const {mode,profile}=useContext(contextMode)
  return (
    <main className={Styles.homeContainer}>
      <div className={Styles.about}>
        <MainHeader>Hello Everyone! I'm {profile.username}.</MainHeader>
        <p className={Styles.paragrapgh} style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}}>
          {profile.about}
        </p>

        <div className={Styles.framer}>
          <div className={Styles.location}>
            <ion-icon
              style={{ fontSize: "2rem", color: "rgb(76, 230, 166)",fill:'rgb(76, 230, 166)' }}
              name="location-outline"
            ></ion-icon>
            <span style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6af':'rgba(24, 24, 24, 0.783)'}}>{profile.location}</span>
          </div>
          <div>
            <Dotelement />
          </div>
          <button style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}} onClick={() => navigate("/about")}>
            More About me &#x2192;
          </button>
        </div>
      </div>
      <RecentProjects />
      <Stack />
      <LetsConnect />
    </main>
  );
}
