import React,{useContext} from 'react'
import Styles from './Dot.module.css'
import { contextMode } from '../AppLayout/AppLayout'

export default function Dot() {
  const {mode}=useContext(contextMode)
  return (
    <div>
        <ul
        style={{
          display: "flex",
          maxWidth: "100%",
          height: "100%",
          maxHeight: "100%",
          placeItems: "center",
          margin: 0,
          padding: 0,
          listStyleType: "none",
          overflowX:"hidden",
          gap: 6,
          position: "relative",
          flexDirection: "column",
          willChange: "transform",
          transform: "translateX(0px)",
          paddingLeft:'15px'
        }}>
    <li>
    <div
      className="framer-swvlxp"
      style={{
        backgroundColor:mode==="dark"?
           'rgb(153,153,153)':'black',
        flexShrink:1,
        opacity: 1
      }}
    />
  </li>
  <li aria-hidden="true" style={{ willChange: "transform" }}>
    <div
      className="framer-swvlxp"
      style={{
        backgroundColor:mode==="dark"?
           'rgb(153,153,153)':'black',
        flexShrink:1,
        opacity: 1
      }}
    />
  </li>
  <li aria-hidden="true" style={{ willChange: "transform" }}>
    <div
      className="framer-swvlxp"
      style={{
        backgroundColor:mode==="dark"?
           'rgb(153,153,153)':'black',
        flexShrink:1,
        opacity: 1
      }}
    />
  </li>
</ul>
      
    </div>
  )
}
