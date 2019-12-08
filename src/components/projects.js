import React from 'react'


// class projects {
//   constructor () {
//     projectTitle = '',
//     this.projectTask = '',
//     this.projectDuration = '',
//     this.projectToolsUsed = '',
//     this.projectComment = '',
//     this.projectLink = ''
//   }
// }


export default () => (
  <div className="projects-section">
    <h1>Projects</h1>
  <div className="project-container">
    <div className="project-header-box">
    <img className="project-image" src="https://i.imgur.com/FKWoPWjm.png"/>
    <h2 className="project-title">Snake Game <a target="blank" href="https://github.com/shanimcd"><i class="devicon-github-plain colored"></i></a></h2>
    </div>
    <h3 className="project-duration">Timeframe: 1 week</h3>
    <p className="project-tools-used">HTML, CSS, JavaScript</p>
    <p className="project-comment">This was my first project with General Assembly. 
     A snake game created with vanilla JavaScript with the styling of our choice.</p>
  </div>
  <div className="project-container">
    <div className="project-header-box">
    <img className="project-image" src="https://i.imgur.com/xURnFuTm.png"/>
    <h2 className="project-title">Gig On A Map <a target="blank" href="http://gigonamap.herokuapp.com/"><i class="devicon-github-plain colored"></i></a> </h2>
    </div>
    <h3 className="project-duration">Timeframe: Two Days</h3>
    <p className="project-tools-used">Reactjs</p>
    <p className="project-comment">
      A one-page app where we pulled in events from an events API and rendered them on a map. 
      My role: finding the API, creating the get request and rendering the keys needed to the dropdown menu.
    </p>
  </div>
  <div className="project-container">
    <div className="project-header-box" >
    <img className="project-image" src="https://i.imgur.com/BhcFk8Nm.png"/>
    <h2 className="project-title">Skill-Swap</h2>
    </div>
    <h3 className="project-duration">Timeframe: 8 Days</h3>
    <p className="project-tools-used">
      MERN stack, Mongoose, Express, React & Node
    </p>
    <p className="project-comment">A StackOverflow style platform for junior developers to ask their tech related questions
      and contributors to host meetups to help juniors to teach a small group about a specific subject.
    </p>
    
  </div>
  <div className="project-container">
    <div className="project-header-box">
    <img className="project-image" src="https://i.imgur.com/oeiqGWom.png"/>
    <h2 className="project-title">The Fitness Space</h2>
    </div>
    <h3 className="project-duration">Timeframe: 1 Week</h3>
    <p className="project-tools-used">Python, Django, ReactJs & Nodejs</p>
    <p className="project-comment">
    A web app that displays gyms specialising in a particular discipline. 
    My three disciplines were Bodybuilding, Pilates and CrossFit. 
    </p>

  </div>
   
  </div>
)


//empty project template

{/* <div className="project-container">
    <h2 className="project-title"></h2>
    <h3 className="project-duration"></h3>
    <p className="project-tools-used"></p>
    <p className="project-comment"></p>
    <p className="project-link"></p>
  </div> */}