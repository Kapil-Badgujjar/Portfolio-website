import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.scss";
import close from '/close.png';
import menu from '/menu.png';
export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div className={`${styles.navbar} ${show ? styles.navbarH:''}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.left}>
          <span>Kapil</span>
        </div>
        <div className={styles.right}>
          <ul className={styles.menuContainer}>
            <li className={styles.pagelink}><a  href="#home" >Home</a></li>
            <li className={styles.pagelink}><a  href="#about" >About</a></li>
            <li className={styles.pagelink}><a  href="#skills" >Skills</a></li>
            <li className={styles.pagelink}><a  href="#projects" >Projects</a></li>
          <div className={styles.right}>
            <a href="#contactme"><Button title="Contact Me" /></a>
          </div>
          </ul>
        </div>
          <div className={styles.menuButtonDiv} onClick={()=>{ setShow(show ? false : true)}}>
            <img src={ show ? close : menu} alt="menu open close button" />
          </div>
      </div>
      <div className={styles.menuList}>
            <ul className={`${styles.menuContainer} ${show ? styles.menuContainerOn: ''}`}>
              <li className={styles.pagelink} onClick={()=>{setShow(false)}}><a  href="#home" >Home</a></li>
              <li className={styles.pagelink} onClick={()=>{setShow(false)}}><a  href="#about" >About</a></li>
              <li className={styles.pagelink} onClick={()=>{setShow(false)}}><a  href="#skills" >Skills</a></li>
              <li className={styles.pagelink} onClick={()=>{setShow(false)}}><a  href="#projects" >Projects</a></li>
              <li onClick={()=>{setShow(false)}}>
                <a href="#contactme"><Button title="Contact Me" /></a>
              </li>
            </ul>
        </div>
    </div>
  );
}
