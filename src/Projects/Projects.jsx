import React from 'react'
import styles from './Projects.module.scss'
import ProjectCard from '../Carousel/ProjectCard'
import supermartimage from '/ecom1.png';
import chatappimage from '/ecom2.png';
import webcrawlerimage from '/ecom3.png';

import ProjectCardX from '../temp/TempComponent';

export default function Projects() {
  return (
    <div id="projects" className={styles.ProjectsContainer}>
    <div className={styles.Projects}>
      <h1>Projects</h1>
      <div className={styles.Carousels}>
        <ProjectCardX cards={[
              <ProjectCard title="SuperMART" image={supermartimage} description="SuperMART is a e-commerce application developed in ReactJS and ExpressJS. For database I used PostgreSQL. I have implemented authentication process using express session, state management using Context and Email verification using SendGrid api. This Application Provides Home page to shwo popular products, Product landing pages for each product, user cart, admin panel to manage products and orders."/>,
              <ProjectCard title="Signal" image={chatappimage} description="Signal is realtime chat application. It is developed in ReactJS and NodeJs. It uses Sockets for real time communication."/>,
              <ProjectCard title="Web Crawler" image={webcrawlerimage} description="A web crawler can crawl websites. We provide a seed url to it and it crawl the webpage and extract information from this website and finds all hyperlinks and crawl those recursivly."/>
            ]} />
        </div>
    </div>
    </div>
  )
}
