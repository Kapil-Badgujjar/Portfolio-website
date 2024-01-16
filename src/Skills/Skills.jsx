import React from "react";
import styles from "./Skills.module.scss";
import htmlImage from "/html-5.png";
import cssImage from "/css-3.png";
import javaScriptImage from "/javascript.png";
import ReactJSImage from "/ReactJS.png";
import NodeJSImage from "/NodeJS.png";
import MongoDBImage from "/MongoDB.png";
import PostgreSQLImage from "/PostgreSQL.png";
import FigmaImage from "/figma.png";
export default function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.head}>
        <h1 className={styles.title}>Skills & Interests</h1>
      </div>
      <div className={styles.main}>
          <div className={styles.skillSet}>
            <h2>Frontend</h2>
            <div className={styles.skillImages}>
              <img src={htmlImage} alt="html"/>
              <img src={cssImage} alt="html"/>
              <img src={javaScriptImage} alt="html"/>
              <img src={ReactJSImage} alt="html"/>
              <div>
              </div>
            </div>
          </div>
          <div className={styles.skillSet}>
            <h2>Backend</h2>
            <div className={styles.skillImages}>
              <img src={NodeJSImage} alt="html"/>
              <div>
              </div>
            </div>
          </div>
          <div className={styles.skillSet}>
            <h2>Database</h2>
            <div className={styles.skillImages}>
              <img src={MongoDBImage} alt="html"/>
              <img src={PostgreSQLImage} alt="html"/>
              <div>
              </div>
            </div>
          </div>
          <div className={styles.skillSet}>
            <h2>Developer Tools</h2>
            <div className={styles.skillImages}>
              <img src={FigmaImage} alt="html"/>
              <div>
              </div>
            </div>
          </div>
      </div>
      {/* <div className={styles.skillsimages}>
        <div className={styles.s1 }><div><img src={htmlImage} alt="" /><span>HTML5</span></div></div>
        <div className={styles.s2 }><div><img src={cssImage} alt="" /><span>CSS3</span></div></div>
        <div className={styles.s3 }><div><img src={javaScriptImage} alt="" /><span>JavaScript</span></div></div>
        <div className={styles.s4 }><div><img src={ReactJSImage} alt="" /><span>ReactJS</span></div></div>
        <div className={styles.s5 }><div><img src={NodeJSImage} alt="" /><span>NodeJS</span></div></div>
        <div className={styles.s6 }><div><img src={MongoDBImage} alt="" /><span>MongoDB</span></div></div>
        <div className={styles.s7 }><div><img src={PostgreSQLImage} alt="" /><span>PostgreSQL</span></div></div>
        <div className={styles.s8 }><div><img src={FigmaImage} alt="" /><span>Figma</span></div></div>
      </div> */}
    </div>
  );
}
