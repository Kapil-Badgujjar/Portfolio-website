import React from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import supermartimage from "/ecom1.png";
import chatappimage from "/ecom2.png";
import webcrawlerimage from "/webcrawler.png";

export default function Projects() {
  return (
    <div className={styles.ProjectsContainer}>
      <div className={styles.head}>
        <h1 className={styles.title}>Projects</h1>
      </div>
      <div className={styles.main}>
        <ProjectCard title="SuperMART" image={supermartimage}>
          <div>
            <button>ReactJs</button>
            <button>Expressjs</button>
            <button>MongoDB</button>
            <p>SuperMart is an advanced ecommerce platform.</p>
          </div>
        </ProjectCard>
        <ProjectCard title="SuperMART" image={chatappimage}>
          <div>
            <p>SuperMart is an advanced ecommerce platform.</p>
          </div>
        </ProjectCard>
        <ProjectCard title="SuperMART" image={webcrawlerimage}>
          <div>
            <p>SuperMart is an advanced ecommerce platform.</p>
          </div>
        </ProjectCard>
      </div>
      <div className={styles.foot}>
        <a href="#">
          <h1>GitHub</h1>
        </a>
        <a href="#">
          <h1>LeetCode</h1>
        </a>
        <a href="#">
          <h1>GeeksforGeeks</h1>
        </a>
      </div>
    </div>
  );
}
