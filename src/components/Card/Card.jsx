import React from 'react'
import styles from './style.module.scss';
export default function Card({children}) {
  return (
    <div className={styles.card}>
        {children}
    </div>
  )
}
