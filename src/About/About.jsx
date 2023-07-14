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
    <div className={styles.About}>
        <div className={styles.AboutContainer}>
            <div className={styles.Left}>
            <h1>About me</h1>
            <p>I am Full Stack Web Developer. I can code in Node.js, Express.js, React.js, JavaScript etc. and for database MongoDB, MySQL, MSSQL, PostgreSQL etc.</p>
            <div className={styles.button}>
                <Button title="Download CV" />
            </div>
            <div className={styles.SocialMedia}>
                <div>
                    <img src={GitHub} alt="github" /> 
                    <span>GitHub</span>
                </div>
                <div>
                    <img src={LinkedIn} alt="linkedin" /> 
                    <span>LinkedIn</span>
                </div>
                <div>
                    <img src={Instagram} alt="instagram" /> 
                    <span>Instagram</span>
                </div>
                <div>
                    <img src={Twitter} alt="twitter" /> 
                    <span>Twitter</span>
                </div>
            </div>
            </div>
            <div className={styles.Right}>
                <img src={AboutImage} alt="about image" />
            </div>
        </div>
    </div>
  )
}
