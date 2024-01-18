import React from "react";
import styles from "./Experience.module.scss";
import ExperienceCard from "./ExperienceCard";
export default function Experience() {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.head}>
        <h1 className={styles.title}>Experience</h1>
      </div>
      <div className={styles.main}>
        <ExperienceCard
          year="2024"
          duration="October 2023 - Present"
          companyName="JethiTech Solutions"
          position="Full Stack Developer"
          viewLink="https://www.linkedin.com/posts/kapil-badgujjar_im-happy-to-share-that-im-starting-a-new-activity-7118607083243003904-qoP_?utm_source=share&utm_medium=member_desktop"
          heightlights={[
            "Built 3 Frontend Projects from scratch",
            "Developed API for Ecommerce project E2E",
            "Worked with new Interns and guide them. Play the role of TL",
            "Collaborated on multiple projects, improved code & resolve bugs"
        ]}
        />
        <ExperienceCard
          year="2023"
          duration="January 2023 - May 2023"
          companyName="CodeQutient"
          position="Software Engineer Intern"
          heightlights={[
            "Worked within a team of new interns",
            "Developed the lead application of the company",
            "Fixed many backend bugs in the previous codebase"
        ]}
        />
      </div>
    </div>
  );
}
