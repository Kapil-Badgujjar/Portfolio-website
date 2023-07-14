import './App.css'
import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import ContactMe from './ContactMe/ContactMe'
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  )
}

export default App
