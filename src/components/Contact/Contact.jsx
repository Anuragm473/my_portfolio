import React from 'react'
import MainHeader from '../MainHeader/MainHeader'
import Styles from './Contact.module.css'
import Paragraph from '../paragraph/Paragraph'

export default function Contact() {
  return (
    <main className={Styles.container}>
    <h2 className={Styles.header}>Let's Connect</h2>
    <div className={Styles.gridContainer}>
        <div className={Styles.contact}>
            <h5 className={Styles.messageMe}>Message me</h5>
            <input placeholder='Name' className={Styles.nameInput} type='text'/>
            <input placeholder='Email' className={Styles.emailInput} type='email'/>
            <textarea placeholder='Write a message...' className={Styles.messageInput} type='text'/>
            <button className={Styles.btn}>Send Message</button>
        </div>
        <div className={Styles.contactInfo}>
        <h5 className={Styles.contactHeader}>Contact</h5>
        <Paragraph><ion-icon style={{fontSize:'1.8rem',paddingRight:'0.8rem'}} name="mail-outline"></ion-icon><span className={Styles.small}>contact@pexiflow.in</span></Paragraph>
        <Paragraph><ion-icon style={{fontSize:'1.8rem',paddingRight:'0.8rem'}} name="call-outline"></ion-icon><span className={Styles.small}>+91 1234567890</span></Paragraph>
        </div>
        <div className={Styles.contactInfo}>
        <h5 className={Styles.contactHeader}>Social Media</h5>
        <Paragraph><ion-icon style={{fontSize:'1.8rem',paddingRight:'0.8rem'}} name="logo-linkedin"></ion-icon><span className={Styles.small}>LinkedIn</span></Paragraph>
        <Paragraph><ion-icon style={{fontSize:'1.8rem',paddingRight:'0.8rem'}} name="logo-twitter"></ion-icon><span className={Styles.small}>Twitter</span></Paragraph>
        <Paragraph><ion-icon style={{fontSize:'1.8rem',paddingRight:'0.8rem'}} name="logo-instagram"></ion-icon><span className={Styles.small}>Instagram</span></Paragraph>
        <Paragraph><ion-icon style={{fontSize:'1.8rem',paddingRight:'0.8rem'}} name="logo-github"></ion-icon><span className={Styles.small}>Github</span></Paragraph>
        </div>
    </div>
    </main>
  )
}
