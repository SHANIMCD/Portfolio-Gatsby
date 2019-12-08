import React from "react"
import Header from '../components/header'
import Handles from '../components/handles'
import Statement from '../components/statement'
import Projects from '../components/projects'
import SkillsList from '../components/skillslist'
import Aboutme from '../components/aboutme'
import Nav from '../components/nav'


import Footer from '../components/footer'


import '../styles/global.css'

export default () => (
  <div className="body">
    
    <section className="header-section">
    <div className="nav-tings">
      <Nav />
    </div>
      <Header />
      <Statement />
      <section className="footer-section">
        <Handles />
        <Footer />
      </section>

    </section>

    <section className="right-side">
    
      <div id="top" className="about-me-section">
        <Aboutme />
      </div>
      <div id="skills" className="skills-section">
        <SkillsList />
      </div>
      <div id="to-projects" className="projects">
      <Projects />
      </div>
    </section>

  </div>
)
