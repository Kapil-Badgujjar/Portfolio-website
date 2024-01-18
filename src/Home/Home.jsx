import React, { useEffect, useMemo, useState } from 'react';
import HeroImage from '/profileimage.jpeg';
import styles from './Home.module.scss';
import GitHub from '/github.svg';
import LinkedIn from '/linkedin.svg';
import Twitter from '/twitter.svg';
import Instagram from '/instagram.svg';
import downIcon from '/down.svg';
import Button from '../Button/Button';
export default function Home() {
  // const [name, setName] = useState('I am Kapil Badgujjar');
  
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     if(name==='I am Kapil Badgujjar'){
  //         setName('Full Stack Developer');
  //       }
  //       else if(name==='Full Stack Developer'){
  //         setName('UI/UX Designer');
  //       }
  //       else{
  //         setName('I am Kapil Badgujjar');
  //       }
  //     }, 2000);
  // },[name]);

  return (
<div className={styles.HomeContainer}>
    <div className={styles.Home}>
        <div className={styles.left}>
            <div className={styles.welcomeMessage}>
              Hi! My name is
              {/* <p className={styles.hiText}>Hi!</p>
              <p className={styles.nameText}>My name is</p> */}
            </div>
            <div className={styles.intro}>
              <h1>Kapil Badgujjar</h1>
              <hr/>
              <p>Full Stack Developer</p>
            </div>
            <p>I'm a passionate Full Stack Web Developer and UI/UX Designer with 1+ years of professonal experience in web technologies. I create exceptional digital experiences with a focus on user-centric design. Let's build impactful projects together!</p>
            <div className={styles.button}>
                <a href="https://drive.google.com/uc?export=download&id=1OdBeowxoGlnSKHDNlsELbZulwWcARFJK">
                    <Button title="Download Resume" />
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
                {/* <a href="" className={styles.s4}>
                    <img src={Twitter} alt="twitter" /> 
                    <span>Twitter</span>
                </a> */}
            </div>
        </div>
        <div className={styles.center}>
            <p className={styles.accentText}>SCROLL</p>
            <div className={styles.scrollAccentAnimation}>
                <div className={styles.scrollLine} />
                <div className={styles.scrollBullet} />
            </div>
            {/* <a href="#experience"><img src={downIcon} alt=""/></a> */}
        </div>
        <div className={styles.right}>
            <div>
                <img src={HeroImage} alt="Hero image" />
            </div>
        </div>
      </div>
      {/* <div className={styles.homeBottom}>
        <div>

        </div>
            <div className={styles.downIons}>
        </div>
        <div>
            <p className={styles.seeMoreButton}>See My Blogs</p>
        </div>
      </div> */}
    </div>
  )
}
