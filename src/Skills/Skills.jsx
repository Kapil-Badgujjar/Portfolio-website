import React from "react";
import styles from "./Skills.module.scss";

import frontendIcon from '../assets/icons/monitor.png';
import backendIcon from '../assets/icons/server.png';
import databaseIcon from '../assets/icons/database.png';
import toolsIcon from '../assets/icons/tools.png';

import htmlImage from "/html-5.png";
import cssImage from "/css-3.png";
import sassImage from "/sass.png";
import javaScriptImage from "../assets/images/javascript.png";
import typeScriptImage from "../assets/images/typescript.png";
import ReactJSImage from "/ReactJS.png";
import NextJSImage from "../assets/images/next-js-icon.svg";
import reduxImage from "../assets/images/redux.png";
import tailwindcss from "../assets/images/tailwindcss.jpg";
import mui from "../assets/images/mui.png";

import NodeJSImage from "/NodeJS.png";
import expressjs from "../assets/images/expressjs.jpg";
import graphql from "../assets/images/graphql.png";

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
          <h2><img src={frontendIcon} alt=""/>Frontend</h2>
          <div className={styles.skillImages}>
            <div className={styles.skill}>
              <img src={NextJSImage} alt="nextjs" />
              <p>NextJS</p>
            </div>
            <div className={styles.skill}>
              <img src={ReactJSImage} alt="react" />
              <p>React</p>
            </div>
            <div className={styles.skill}>
              <img src={reduxImage} alt="redux" />
              <p>Redux</p>
            </div>
            <div className={styles.skill}>
              <img src={javaScriptImage} alt="javascript" />
              <p>JavaScript</p>
            </div>
            <div className={styles.skill}>
              <img src={typeScriptImage} alt="typescript" />
              <p>TypeScript</p>
            </div>
            <div className={styles.skill}>
              <img src={tailwindcss} alt="tailwindcss" />
              <p>Tailwind</p>
            </div>
            <div className={styles.skill}>
              <img src={sassImage} alt="sass" />
              <p>Sass</p>
            </div>
            <div className={styles.skill}>
              <img src={cssImage} alt="css" />
              <p>CSS</p>
            </div>
            <div className={styles.skill}>
              <img src={htmlImage} alt="html" />
              <p>HTML</p>
            </div>
            <div className={styles.skill}>
              <img src={mui} alt="mui" />
              <p>MaterialUI</p>
            </div>
          </div>
        </div>
        <div className={styles.skillSet}>
          <h2><img src={backendIcon} alt=""/>Backend</h2>
          <div className={styles.skillImages}>
            <div className={styles.skill}>
              <img src={NodeJSImage} alt="nodejs" />
              <p>Node.js</p>
            </div>
            <div className={styles.skill}>
              <img src={expressjs} alt="expressjs" />
              <p>Express.js</p>
            </div>
            <div className={styles.skill}>
              <img src={graphql} alt="graphql" />
              <p>GraphQL</p>
            </div>
          </div>
        </div>
        <div className={styles.skillSet}>
          <h2><img src={databaseIcon} alt=""/>Database</h2>
          <div className={styles.skillImages}>
            <div className={styles.skill}>
              <img src={MongoDBImage} alt="mongodb" />
              <p>MongoDB</p>
            </div>
            <div className={styles.skill}>
              <img src={PostgreSQLImage} alt="postgresql" />
              <p>PostgreSQL</p>
            </div>
            <div className={styles.skill}>
              <img src={MySQL} alt="mysql" />
              <p>MySQL</p>
            </div>
          </div>
        </div>
        <div className={styles.skillSet}>
          <h2><img src={toolsIcon} alt=""/>Developer Tools</h2>
          <div className={styles.skillImages}>
            <div className={styles.skill}>
              <img src={VsCode} alt="vscode" />
              <p>VSCode</p>
            </div>
            <div className={styles.skill}>
              <img src={Git} alt="git" />
              <p>Git</p>
            </div>
            <div className={styles.skill}>
              <img src={GitHubImage} alt="github" />
              <p>GitHub</p>
            </div>
            <div className={styles.skill}>
              <img src={ubuntu} alt="ubuntu" />
              <p>Ubuntu</p>
            </div>
            <div className={styles.skill}>
              <img src={FigmaImage} alt="figma" />
              <p>Figma</p>
            </div>
            <div className={styles.skill}>
              <img src={docker} alt="docker" />
              <p>Docker</p>
            </div>
            <div className={styles.skill}>
              <img src={redis} alt="redis" />
              <p>Redis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
