import React from 'react'
import Styles from './Paragraph.module.css'
export default function Paragraph({children}) {
  return (
    <p className={Styles.paragrapgh}>{children}</p>
  )
}
