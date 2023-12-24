import React, { useEffect, useMemo, useState } from 'react';
import HeroImage from '/profileimage.jpeg';
import styles from './Home.module.scss';
import GitHub from '/github.svg';
import LinkedIn from '/linkedin.svg';
import Twitter from '/twitter.svg';
import Instagram from '/instagram.svg';
import Button from '../Button/Button';
export default function Home() {
  const [name, setName] = useState('Kapil Badgujjar');
  
  useEffect(()=>{
    setTimeout(()=>{
      if(name==='Kapil Badgujjar'){
          setName('Web Developer');
        }else if(name==='Web Developer'){
          setName('UI/UX Designer');
        }
        else{
          setName('Kapil Badgujjar');
        }
      }, 2000);
  },[name]);

  return (
    <div id="home" className={styles.Home}>
      <div className={styles.HomeContainer}>
        <div className={styles.left}>
            <h2>Hey! I am</h2>
            <h1>{name}</h1>
            <p>Hello, I'm a passionate Full Stack Web Developer and UI/UX Designer. I create exceptional digital experiences with a focus on user-centric design. Let's build impactful projects together!</p>
            <div className={styles.button}>
                <a href="https://drive.google.com/uc?export=download&id=1OdBeowxoGlnSKHDNlsELbZulwWcARFJK">
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
        <div className={styles.right}>
            <div>
                <img src={HeroImage} alt="Hero image" />
            </div>
        </div>
      </div>
    </div>
  )
}
