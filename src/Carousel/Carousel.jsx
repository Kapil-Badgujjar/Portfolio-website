import React from 'react'
import styles from './Carousel.module.scss'

export default function Carousel(props) {
  return (
    <div className={styles.carousel}>
      <div className={styles.title}>{props.title}</div>
      <div>
        <div className={styles.description}>{props.description}</div>
        <img src={props.image} alt="Project Image" />
      </div>
    </div>
  )
}
