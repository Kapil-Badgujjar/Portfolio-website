import React from 'react'
import styles from './About.module.scss'
import image2 from '/profileimage.jpeg'
import Button from '../Button/Button'
export default function About() {
  return (
    <div  className={styles.aboutContainer}>
        <div className={styles.left}>
            <h1>About me</h1>
            <p>I am Full Stack Web Developer. I can code in Node.js, Express.js, React.js, JavaScript etc. and for database MongoDB, MySQL, MSSQL, PostgreSQL etc.</p>
            <div className={styles.button}>
                <Button title="Download CV" />
            </div>
            <ul className={styles.socialMedia}>
                <li>GitHub</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
            </ul>
        </div>
        <div className={styles.right}>
            <img src={image2} alt="about section image" />
        </div>
    </div>
  )
}
