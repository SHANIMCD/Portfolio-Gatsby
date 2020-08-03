import React from "react"
import Header from '../components/header'
import Handles from '../components/handles'
import Projects from '../components/projects'
import SkillsList from '../components/skillslist'
import Aboutme from '../components/aboutme'
import Nav from '../components/nav'

import '../styles/animate.css'
import '../styles/global.css'

export default () => (
  <div id="top" className="body">
     <div className="nav-tings">
      <Nav />
    </div>
    <section className="header-section">
      <Header />
      <section className="footer-section">
        <Handles />
      </section>
    </section>

    <section className="right-side">
      <div className="about-me-section">
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
