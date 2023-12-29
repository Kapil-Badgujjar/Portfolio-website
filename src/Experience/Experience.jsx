import React from 'react'
import styles from './Experience.module.scss';
import JethiTechImage from '/JethiTech.svg'
import CodeQuotientImage from '/CodeQuotient.png'
export default function Experience() {
  return (
    <div className={styles.experienceContainer}>
        <div className={styles.head}>
            <h1 className={styles.title}>Experience</h1>
        </div>
        <div className={styles.main}>

            <div className={styles.experienceCard}>
              <div className={styles.companyLogoCard1}>
                <h1>Full Stack Developer at</h1>
                <img src={JethiTechImage} alt="JethiTech Solutions" />
              </div>
              <div className={styles.companyDetailsCard1}>
                <h1>JethiTech Solutions PVT</h1>
                <h2>From October 2023 - Present</h2>
                <div>
                  <p>Developed 3 Frontend Projects from scratch</p>
                  <p>Worked with new Interns and guide them. Play the role of TL</p>
                  <p>Collaborated on multiple projects to resolve bugs</p>
                </div>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.companyLogoCard2}>
                <h1>5 Months intership from </h1>
                <img src={CodeQuotientImage} alt="JethiTech Solutions" />
              </div>
              <div className={styles.companyDetailsCard2}>
                <h1>CodeQuotient Pvt Ltd</h1>
                <h2>From October 2023 - Present</h2>
                <div>
                  <p>Developed 3 Frontend Projects from scratch</p>
                  <p>Worked with new Interns and guide them. Play the role of TL</p>
                  <p>Collaborated on multiple projects to resolve bugs</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
