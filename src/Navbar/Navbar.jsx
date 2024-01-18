import React from "react";
import styles from "./Navbar.module.scss";
export default function Navbar(props) {
  return (
      <div className={styles.navbar}>
        <div className={styles.left}>
          <a href="#home">Kapil Badgujjar</a>
        </div>
        <div className={styles.right}>
            <a href="#experience" className={`${styles.pagelink} ${props.activeLink === 'Experience' ? styles.pagelinkactive:''}`} onClick={()=>props.setActiveLink('Experience')}>Experience</a>
            <a href="#skills" className={`${styles.pagelink} ${props.activeLink === 'Skills' ? styles.pagelinkactive:''}`} onClick={()=>props.setActiveLink('Skills')}>Skills</a>
            <a href="#projects" className={`${styles.pagelink} ${props.activeLink === 'Projects' ? styles.pagelinkactive:''}`} onClick={()=>props.setActiveLink('Projects')}>Projects</a>
            <a href="#contactme" className={`${styles.pagelink} ${props.activeLink === 'Contact Me' ? styles.pagelinkactive:''}`} onClick={()=>props.setActiveLink('Contact Me')}>Contact Me</a>
        </div>
      </div>
  );
}
