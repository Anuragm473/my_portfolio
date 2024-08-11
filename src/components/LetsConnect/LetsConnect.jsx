import React, { useContext } from 'react'
import Styles from './LetsConnect.module.css'
import { useNavigate } from 'react-router-dom'
import { contextMode } from '../AppLayout/AppLayout'
export default function LetsConnect() {
  const {mode}=useContext(contextMode)
  const navigate=useNavigate()
  return (
    <h1 style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}} onClick={()=>navigate('/contact')} className={Styles.contact}>Let's Connect!</h1>
  )
}
