import React from "react";
import styles from './card-style.module.scss'
export default function ExperienceCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <h1>{props.year}</h1>
        <div className={styles.horizontalLine}>
          <div className={styles.line}></div>
          <div className={styles.circle}>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <span>{props.duration}</span>
        <p>{props.companyName}</p>
        <span className={styles.position}>{props.position}</span>
        <br />
        <ul>
          {props.heightlights.map((i,index)=><li key={index}>{i}</li>)}
        </ul>
        <div>
            {props.viewLink && <a href={props.viewLink}>View</a>}
        </div>
      </div>
    </div>
  );
}
