import React from 'react'
import Button from '../Button/Button'
import styles from './About.module.scss'
import AboutImage from '/profileimage.jpeg'
import GitHub from '/github.png';
import LinkedIn from '/linked.png';
import Twitter from '/twitter.png';
import Instagram from '/insta.png';
export default function About() {
  return (
    <div id="about" className={styles.About}>
        <div className={styles.AboutContainer}>
            <div className={styles.Left}>
            <h1>About me</h1>
            <p>I am Full Stack Web Developer. I can code in Node.js, Express.js, React.js, JavaScript etc. and for database MongoDB, MySQL, MSSQL, PostgreSQL etc.</p>
            <div className={styles.button}>
                <a href="https://drive.google.com/uc?export=download&id=1TUCII2Do5dD070-CBD1U_us752Ay5sov">
                    <Button title="Download CV" />
                </a>
            </div>
            <div className={styles.SocialMedia}>
                <a href="https://github.com/Kapil-Badgujjar" className={styles.s1}>
                    <img src={GitHub} alt="github" /> 
                    <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/kapil-badgujjar/" className={styles.s2}>
                    <img src={LinkedIn} alt="linkedin" /> 
                    <span>LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/its_kapil_badgujjar/?hl=en" className={styles.s3}>
                    <img src={Instagram} alt="instagram" /> 
                    <span>Instagram</span>
                </a>
                <a href="" className={styles.s4}>
                    <img src={Twitter} alt="twitter" /> 
                    <span>Twitter</span>
                </a>
            </div>
            </div>
            <div className={styles.Right}>
                <img src={AboutImage} alt="about image" />
            </div>
        </div>
    </div>
  )
}
