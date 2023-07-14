import React from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.scss";

export default function Navbar() {
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
      </div>
  );
}
