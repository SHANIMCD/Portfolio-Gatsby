import React from "react"
import Header from '../components/header'
import Handles from '../components/handles'
import Statement from '../components/statement'
import Projects from '../components/projects'

import Footer from '../components/footer'


import '../styles/global.css'

export default () => (
  <div className="body">
    <section className="header-section">
      <Header />
      <Statement />
    </section>
    
    <section className="projects">
      <Projects />
    </section>
    <section>
      <Handles />
      <Footer />
    </section>
  </div>
)
