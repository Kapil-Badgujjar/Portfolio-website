import React from "react";
import styles from "./styles.module.scss";

export default function ProjectCard(props) {
  return (
      <div className={styles.projectCard}>
        <img src={props.image} alt="Project Image" />
        <div className={styles.details}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.links}>
            <div>Visit</div>
            <div>GitHub</div>
          </div>
          {props.children}
        </div>
      </div>
  );
}
