import React from 'react'
import styles from './Button.module.scss'
export default function Button(props) {
  return (
    <button className={styles.orangeButton}>
      {props.title}
    </button>
  )
}
