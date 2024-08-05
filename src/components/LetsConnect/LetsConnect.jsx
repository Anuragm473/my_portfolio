import React from 'react'
import Styles from './LetsConnect.module.css'
import { useNavigate } from 'react-router-dom'
export default function LetsConnect() {
  const navigate=useNavigate()
  return (
    <h1 onClick={()=>navigate('about')} className={Styles.contact}>Let's Connect!</h1>
  )
}
