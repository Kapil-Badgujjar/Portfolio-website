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
