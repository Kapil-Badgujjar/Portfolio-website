import React from 'react'
import styles from './Projects.module.scss'
import Carousel from '../Carousel/Carousel'
import supermartimage from '/ecom1.png';
import chatappimage from '/ecom2.png';
import webcrawlerimage from '/ecom3.png';
export default function Projects() {
  return (
    <div className={styles.ProjectsContainer}>
    <div className={styles.Projects}>
      <h1>Projects</h1>
      <div className={styles.Carousels}>
        <Carousel title="SuperMART" image={supermartimage} description="SuperMART is a e-commerce application developed in ReactJS and ExpressJS. For database I used PostgreSQL. I have implemented authentication process using express session, state management using Context and Email verification using SendGrid api. This Application Provides Home page to shwo popular products, Product landing pages for each product, user cart, admin panel to manage products and orders."/>
        <Carousel title="Signal" image={chatappimage} description="Signal is realtime chat application. It is developed in ReactJS and NodeJs. It uses Sockets for real time communication."/>
        <Carousel title="Web Crawler" image={webcrawlerimage} description="A web crawler can crawl websites. We provide a seed url to it and it crawl the webpage and extract information from this website and finds all hyperlinks and crawl those recursivly."/>
      </div>
    </div>
    </div>
  )
}
