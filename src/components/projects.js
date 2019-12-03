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

  <div className="project-container">
    <h2 className="project-title">Snake Game</h2>
    <h3 className="project-duration">Timeframe: 1 week</h3>
    <p className="project-tools-used">HTML, CSS, JavaScript </p>
    <p className="project-comment">This was my first project with General Assembly. 
    We had just completed a week of JavaScript and the task was to create a game using only vanilla JavaScript with the styling of our choice.</p>
    <p className="project-link">The project is deployed live <a href="">here</a></p>
  </div>
  <div className="project-container">
    <h2 className="project-title">Gig On A Map - React-Athon</h2>
    <h3 className="project-duration">Timeframe: Two Days</h3>
    <p className="project-tools-used">Reactjs</p>
    <p className="project-comment">
      Based on our knowledge of API’s our task was to use a public API (or more if we preferred) of our choice and create a front end way of displaying them. 
      Our project was a one-page app where we pulled in events from an events API and rendered them on a map. 
      My role: finding the API, creating the get request and rendering the keys needed to the dropdown menu.
    </p>
    <p className="project-link">The project is deployed live <a href="http://gigonamap.herokuapp.com/">here</a></p>
  </div>
  <div className="project-container">
    <h2 className="project-title">Skill-Swap</h2>
    <h3 className="project-duration">Timeframe: 8 Days</h3>
    <p className="project-tools-used">
      MERN stack, Mongoose, Express, React & Node
    </p>
    <p className="project-comment">Create a full-stack app with multiple components which can include external APIs or be created ourselves, following the MVC model with react. 
    We were only given a readme file so had to start from the beginning for the first time.
    My role: I worked more with the models, and how they are controlled which led into the seeding of the profiles since I knew the most about which fields of input would be required etc. 
    Also, I did styling on the front page and rendered the only external API that we used on the page.
    </p>
    <p className="project-link">The project is deployed live <a href="">here</a></p>
  </div>
  <div className="project-container">
    <h2 className="project-title">The Fitness Space</h2>
    <h3 className="project-duration">Timeframe: 1 Week</h3>
    <p className="project-tools-used">Python, Django, ReactJs & Nodejs</p>
    <p className="project-comment">
    A web app that displays gyms specialising in a particular discipline. 
    My three disciplines were Bodybuilding, Pilates and CrossFit. 
    I used the framework Django for creation of the models, serializers and managing the back end and used ReactJs for the front end.
    </p>
    <p className="project-link">The project is deployed live <a href="">here</a></p>
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