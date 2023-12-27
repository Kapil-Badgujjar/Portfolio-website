import styles from './App.module.scss'
import Home from './Home/Home'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import ContactMe from './ContactMe/ContactMe'
import Navbar from './Navbar/Navbar'

import backgroundImage from '/ani_bk3.svg'
import { useState, useEffect, useRef } from 'react'
import Experience from './Experience/Experience'

function App() {
  const hRef = useRef(null);
  const eRef = useRef(null);
  const sRef = useRef(null);
  const pRef = useRef(null);
  const cRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(undefined)
  function handleScroll() {
    const offset = window.scrollY;
    let h = hRef.current.clientHeight;
    let e = hRef.current.clientHeight;
    let s = sRef.current.clientHeight;
    let p = pRef.current.clientHeight;
    let c = cRef.current.clientHeight;
    if (offset < h-20){ setScrolled(false); setActiveLink(undefined); }
    else { 
      setScrolled(true); 
      if(offset > h+e+p+s-80){
        setActiveLink('Contact Me')
      } else if(offset > h+e+p-80){
        setActiveLink('Skills');
      }else if(offset > h+e){
        setActiveLink('Projects');
      } else setActiveLink('Experience');
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
  },[])
  return (
    <div>
      <div id="home" ref={hRef} className={styles.heroSection}>
        <div className={`${scrolled ? styles.blankfill:''}`}></div>
        <heder className={`${scrolled ? styles.navbarSticky:''}`}>
          <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
        </heder>
        <div className={styles.homeComponent}>
          <Home />
        </div>
        <img className={styles.heroBackground} src={backgroundImage} alt="background" />
      </div>
      <div id="experience" href={eRef} className={styles.experience}>
          <Experience />
      </div>
      <div id="projects" ref={pRef}>
        <Projects />
      </div>
      <div id="skills" ref={sRef}>
        <Skills />
      </div>
      <div id="contactme"  ref={cRef} style={{height:'100vh'}}>
        <ContactMe />
      </div>
    </div>
  )
}

export default App
