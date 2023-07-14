import React from 'react'
import styles from './skills.module.scss'
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
    <div className={styles.skillsContainer}>
      <h1>Skills</h1>
      <div className={styles.skillsimages}>
        <div><img src={htmlImage} alt="" /></div>
        <div><img src={cssImage} alt="" /></div>
        <div><img src={javaScriptImage} alt="" /></div>
        <div><img src={ReactJSImage} alt="" /></div>
        <div><img src={NodeJSImage} alt="" /></div>
        <div><img src={MongoDBImage} alt="" /></div>
        <div><img src={PostgreSQLImage} alt="" /></div>
        <div><img src={FigmaImage} alt="" /></div>
      </div>
    </div>
  )
}
