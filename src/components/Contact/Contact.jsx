import React, { useContext, useState } from 'react'
import MainHeader from '../MainHeader/MainHeader'
import Styles from './Contact.module.css'
import Paragraph from '../paragraph/Paragraph'
import { contextMode } from '../AppLayout/AppLayout'
import axios from 'axios';


export default function Contact() {
  const {mode,profile}=useContext(contextMode)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const recieverEmail=profile.email
  const subject="Let's Collabrate"

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://pexiflow-backend.onrender.com/api/contact/sendEmail', { name, email, message,recieverEmail,subject});

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      alert('something went wrong')
    }
  };

  return (
    <main className={Styles.container}>
    <h2 style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}} className={Styles.header}>Let's Connect</h2>
    <div className={Styles.gridContainer}>
        <div className={Styles.contact}>
            <h5 style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}} className={Styles.messageMe}>Message me</h5>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Name' className={Styles.nameInput} type='text'/>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' className={Styles.emailInput} type='email'/>
            <textarea value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder='Write a message...' className={Styles.messageInput} type='text'/>
            <button className={Styles.btttn} onClick={(e)=>handleSubmit(e)}>Send Message</button>
        </div>
        <div className={Styles.contactInfo}>
        <h5 style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}} className={Styles.contactHeader}>Contact</h5>
        <Paragraph><ion-icon style={{fontSize:'1.8rem',paddingRight:'0.8rem'}} name="mail-outline"></ion-icon><span className={Styles.small}>anurag47mishra@gmail.com</span></Paragraph>
        <Paragraph><ion-icon style={{fontSize:'1.8rem',paddingRight:'0.8rem'}} name="call-outline"></ion-icon><span className={Styles.small}>+91 1234567890</span></Paragraph>
        </div>
        <div className={Styles.contactInfo}>
        <h5 style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}} className={Styles.contactHeader}>Social Media</h5>
        <Paragraph><ion-icon style={{fontSize:'1.8rem',paddingRight:'0.8rem'}} name="logo-linkedin"></ion-icon><span className={Styles.small}>LinkedIn</span></Paragraph>
        <Paragraph><ion-icon style={{fontSize:'1.8rem',paddingRight:'0.8rem'}} name="logo-instagram"></ion-icon><span className={Styles.small}>Instagram</span></Paragraph>
        <Paragraph><ion-icon style={{fontSize:'1.8rem',paddingRight:'0.8rem'}} name="logo-github"></ion-icon><span className={Styles.small}>Github</span></Paragraph>
        </div>
    </div>
    </main>
  )
}
