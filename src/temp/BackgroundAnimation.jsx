import React from 'react'
import img1 from '../assets/largec.svg';
import img2 from '../assets/midc.svg';
import img3 from '../assets/smallc.svg';
import styles from './BackgroundAnimation.module.scss';
export default function BackgroundAnimation() {
  return (
    <div className={styles.animationContainer}>
        <div className={styles.bgAni}>
            <img className={styles.aniImg1} src={img1} alt="circle" />
            <img className={styles.aniImg2} src={img2} alt="circle" />
            <img className={styles.aniImg3} src={img3} alt="circle" />
        </div>
    </div>
  )
}
