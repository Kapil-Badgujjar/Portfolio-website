import React from 'react'
import styles from './Projects.module.scss'
import ProjectCard from '../Carousel/ProjectCard'
import supermartimage from '/ecom1.png';
import chatappimage from '/ecom2.png';
import webcrawlerimage from '/webcrawler.png';

import ProjectCardX from '../temp/TempComponent';

export default function Projects() {
  return (
    <div className={styles.ProjectsContainer}>
      <div className={styles.head}>
        <h1 className={styles.title}>Projects</h1>
      </div>
    <div className={styles.Projects}>
      <div>
        Hello sample
      </div>
      <div className={styles.Carousels}>
        <ProjectCardX cards={[
              <ProjectCard title="SuperMART" image={supermartimage} description="SuperMART is a e-commerce application developed in ReactJS and ExpressJS. For database I used PostgreSQL. I have implemented authentication process using express session, state management using Context and Email verification using SendGrid api. This Application Provides Home page to shwo popular products, Product landing pages for each product, user cart, admin panel to manage products and orders."/>,
              // <ProjectCard title="Signal" image={chatappimage} description="*(Under developement) Signal is realtime chat application. It is developed in ReactJS and NodeJs. It uses Sockets for real time communication."/>,
              <ProjectCard title="Web Crawler" image={webcrawlerimage} description="I built a Web Crawler in Node Js. Developed and implement a Complex HTML Reader Algorithm that can read HTML Files and Extract information from these files. Also developed an Indexing algorithm to index the information extracted from webpages. Store the data in database for easy retrival. Also developed a query to search the information from the database. The query accepts a word and find all the urls that contains that word and sort these urls according to weight of the word"/>
            ]} />
        </div>
    </div>
    </div>
  )
}
