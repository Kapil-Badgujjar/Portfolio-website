import React from 'react'
import styles from './Skills.module.scss'
import htmlImage from '/html-5.png'
import cssImage from '/css-3.png'
import javaScriptImage from '/javascript.png'
import ReactJSImage from '/ReactJS.png'
import NodeJSImage from '/NodeJS.png'
import MongoDBImage from '/MongoDB.png'
import PostgreSQLImage from '/PostgreSQL.png'
import FigmaImage from '/figma.png'
export default function Skills() {
  return (
    <div id="skills" className={styles.skills}>
    <div  className={styles.skillsContainer}>
      <h1>Skills</h1>
      <div className={styles.skillsimages}>
        <div className={styles.s1 }><div><img src={htmlImage} alt="" /><span>Proficient Level</span></div></div>
        <div className={styles.s2 }><div><img src={cssImage} alt="" /><span>Proficient Level</span></div></div>
        <div className={styles.s3 }><div><img src={javaScriptImage} alt="" /><span>Proficient Level</span></div></div>
        <div className={styles.s4 }><div><img src={ReactJSImage} alt="" /><span>Proficient Level</span></div></div>
        <div className={styles.s5 }><div><img src={NodeJSImage} alt="" /><span>Proficient Level</span></div></div>
        <div className={styles.s6 }><div><img src={MongoDBImage} alt="" /><span>Proficient Level</span></div></div>
        <div className={styles.s7 }><div><img src={PostgreSQLImage} alt="" /><span>Proficient Level</span></div></div>
        <div className={styles.s8 }><div><img src={FigmaImage} alt="" /><span>Proficient Level</span></div></div>
      </div>
    </div>
    </div>
  )
}
