import React from "react";
import styles from "./Skills.module.scss";
import htmlImage from "/html-5.png";
import cssImage from "/css-3.png";
import sassImage from "/sass.png";
import javaScriptImage from "../assets/images/javascript.png";
import typeScriptImage from '../assets/images/typescript.png';
import ReactJSImage from "/ReactJS.png";
import NextJSImage from '../assets/images/next-js-icon.svg';
import reduxImage from '../assets/images/redux.png';
import tailwindcss from '../assets/images/tailwindcss.jpg';
import mui from '../assets/images/mui.png';

import NodeJSImage from "/NodeJS.png";
import expressjs from '../assets/images/expressjs.jpg';
import graphql from '../assets/images/graphql.png';

import MongoDBImage from "/MongoDB.png";
import PostgreSQLImage from "/PostgreSQL.png";
import MySQL from "../assets/images/mysql.png";


import VsCode from "../assets/images/vscode.png";
import Git from "../assets/images/git.png";
import GitHubImage from "../assets/images/github.png";
import photoShop from "../assets/images/photoshop.png";
import ubuntu from "../assets/images/ubuntu.png";
import docker from "../assets/images/docker.svg";
import redis from "../assets/images/redis.svg";
import FigmaImage from "/figma.png";
export default function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.head}>
        <h1 className={styles.title}>Skills</h1>
      </div>
      <div className={styles.main}>
          <div className={styles.skillSet}>
            <h2>Frontend</h2>
            <div className={styles.skillImages}>
              <img src={NextJSImage} alt="nextjs"/>
              <img src={ReactJSImage} alt="react"/>
              <img src={reduxImage} alt="redux"/>
              <img src={javaScriptImage} alt="javascript"/>
              <img src={typeScriptImage} alt="typescript"/>
              <img src={tailwindcss} alt="tailwindcss"/>
              <img src={sassImage} alt="sass"/>
              <img src={cssImage} alt="css"/>
              <img src={htmlImage} alt="html"/>
              <img src={mui} alt="mui"/>
              <div>
              </div>
            </div>
          </div>
          <div className={styles.skillSet}>
            <h2>Backend</h2>
            <div className={styles.skillImages}>
              <img src={NodeJSImage} alt="nodejs"/>
              <img src={expressjs} alt="expressjs"/>
              <img src={graphql} alt="graphql"/>
              <div>
              </div>
            </div>
          </div>
          <div className={styles.skillSet}>
            <h2>Database</h2>
            <div className={styles.skillImages}>
              <img src={MongoDBImage} alt="mongodb"/>
              <img src={PostgreSQLImage} alt="postgresql"/>
              <img src={MySQL} alt="mysql"/>
              <div>
              </div>
            </div>
          </div>
          <div className={styles.skillSet}>
            <h2>Developer Tools</h2>
            <div className={styles.skillImages}>
              <img src={VsCode} alt="vscode"/>
              <img src={Git} alt="git"/>
              <img src={GitHubImage} alt="github"/>
              <img src={ubuntu} alt="ubuntu"/>
              <img src={FigmaImage} alt="figma"/>
              <img src={docker} alt="docker"/>
              <img src={redis} alt="redis"/>
              <div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
