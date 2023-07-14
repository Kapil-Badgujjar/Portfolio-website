import React from 'react'
import HeroImage from '/profileimage.jpeg';
import styles from './Home.module.scss'
export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.HomeContainer}>
        <div className={styles.left}>
            <h2>Hey...! I am</h2>
            <h1>Kapil Badgujjar</h1>
            <p>I am a passionate full stack web developer. I can code in ReactJS, NodeJS, Javascript, MongoDB and SQL. I had created 3 projects like SuperMART, Signal, Web Crawler etc.</p>
        </div>
        <div className={styles.right}>
            <div>
                <img src={HeroImage} alt="Hero image" />
            </div>
        </div>
      </div>
    </div>
  )
}
