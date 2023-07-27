import React from 'react'
import Button from '../Button/Button'
import styles from './About.module.scss'
import AboutImage from '/profileimage.jpeg'

export default function About() {
  return (
    <div id="about" className={styles.About}>
        <div className={styles.AboutContainer}>
            <div className={styles.Left}>
            <h1>About me</h1>
            <p>I'm a passionate Full Stack Web Developer and UI/UX Designer skilled in JavaScript, ReactJS, NodeJS, MongoDB, PostgreSQL, and user-centric design. I love crafting exceptional digital experiences and thrive on creative problem-solving. Let's collaborate and bring ideas to life!</p>
            <div className={styles.button}>
                <a href="https://drive.google.com/uc?export=download&id=1wiYPuf-axwFeGTDBof03s-pbdtUX1bgy">
                    <Button title="Download CV" />
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
