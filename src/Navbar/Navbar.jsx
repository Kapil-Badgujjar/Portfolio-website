import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.scss";
import close from '/close.png';
import menu from '/menu.png';
export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
      <div className={styles.navbar}>
        <div className={styles.left}>
          <span>Kapil</span>
        </div>
        <div className={styles.right}>
          <ul className={styles.menuContainer}>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>
              <Button title="Contact Me" />
            </li>
          </ul>
        </div>
        <div className={styles.menuList}>
          <div onClick={()=>{ setShow(show ? false : true)}}>
            <img src={ show ? close : menu} alt="menu open close button" />
          </div>
          <ul className={`${styles.menuContainer} ${show ? styles.menuContainerOn: ''}`}>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>
              <Button title="Contact Me" />
            </li>
          </ul>
        </div>
      </div>
  );
}
