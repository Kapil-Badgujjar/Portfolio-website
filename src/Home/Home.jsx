import React, { useEffect, useMemo, useState } from 'react'
import HeroImage from '/profileimage.jpeg';
import styles from './Home.module.scss'
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
            <h2>Hey...! I am</h2>
            <h1>{name}</h1>
            <p>Hello, I'm a passionate Full Stack Web Developer and UI/UX Designer. I create exceptional digital experiences with a focus on user-centric design. Let's build impactful projects together!</p>
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
