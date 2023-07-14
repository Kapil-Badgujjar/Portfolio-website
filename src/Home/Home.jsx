import React from 'react'
import styles from './Home.module.scss';
import Navbar from '../Navbar/Navbar';
import profileImage from '../../public/profileimage.jpeg';
export default function Home() {
  return (
    <div className={styles.homeContainer}>
        <Navbar />
        <div className={styles.innerContainer}>
            <div className={styles.left}>
                <h2>Hi...! I am</h2>
                <h1>Kapil Badgujjar</h1>
                <p>I am a passionate full stack web developer. I have already developed 3 Prjects using MERN stack include SuperMART : e-commerce application, Signal Chat application, Netflix clone.</p>
            </div>
            <div className={styles.right}>
                <img src={profileImage} alt='profile image' />
            </div>
        </div>
    </div>
  )
}