import cappyImage from './../media/cappy_logo.png'
import webmotiImage from './../media/webmoti.png'
import React from "react";
import './experienceStyle.css';


class Experience extends React.Component{
    render() {
        return(
          <div className="ui middle aligned stackable grid container about-container">
            <h2>Experience</h2>
              <div className="row ">
                  <div className="eight wide column">
                      <div className="row ui grid">
                          <div className="six wide column">
                              <h3>Full Stack Developer</h3>
                              <i>September 2019 - Current</i>
                          </div>
                          <div className="six wide right floated column">
                              <img className="cappyImage" alt="cappy" src={cappyImage} />
                          </div>

                      </div>

                      <ul className="experienceItemStyling" >
                         <li className="paddingExperienceList">
                             Developed system for deaf & hard of hearing users assess the quality of closed captioning video standard and improve upon it.
                         </li>
                         <li className="paddingExperienceList">
                             Django, JavaScript, and SQLite used to store caption ratings to the database and actively improve learning models from users’ assessments.
                         </li>
                         <li className="paddingExperienceList">
                             Architecting REST compliant endpoints hosted on an Apache2 server for reliable client-server connections.
                         </li>
                          <li>
                             Contribution in an agile development life-cycle with continuous integration, unit testing, and version control using git.
                         </li>
                      </ul>
                  </div>
                  <div className="six wide right floated column">
                      <div className="row ui grid">
                          <div className="eight wide column">
                              <h3>Software Developer</h3>
                              <i>September 2018 - August 2019</i>
                          </div>
                          <div className="six wide right floated column">
                              <img className="webmotiImage" alt="cappy" src={webmotiImage} />
                          </div>
                      </div>
                      <ul className="experienceItemStyling" >
                         <li className="paddingExperienceList">
                             Constructed a robot tailored for special needs students enhancing their social and academic engagement within the classroom.
                         </li>
                         <li className="paddingExperienceList">
                             Implemented & unit tested peer-to-peer website conferencing web application using WebRTC, Firebase, & NodeJS.
                         </li>
                         <li>
                             Implemented Apache Web Server on Digital Oceans droplet with socket.io connection allowing the client to control server-side servomotor.
                         </li>
                      </ul>
                  </div>
              </div>
          </div>
        );
    }
}










export default Experience;
























