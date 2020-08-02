import portfolioImage from './../media/garoportfolio.png'
import React from "react";
import './aboutStyles.css';

class About extends React.Component{
    render() {
        return(
          <div className="ui middle aligned stackable grid container about-container">
              <div className="row">
                  <div className="eight wide column">
                      <h2>About</h2>
                      <p className="about-text-styling">
                          I'm a Canadian full stack developer currently working in the Django framework, the majority of my frontend work is done using javascript with some implementations of Vue, React.
                      </p>
                      <p className="about-text-styling">
                          I also have professional experience with cloud computing, first started with Digital Oceans and most recently AWS EC2. I've worked extensively with apache2 but most recently I have migrated most projects I work on to Nginx for better performance and its ability to scale.
                      </p>
                      <p className="about-text-styling">
                          I also have professional experience with cloud computing, first started with Digital Oceans and most recently AWS EC2. I've worked extensively with apache2 but most recently I have migrated most projects I work on to Nginx for better performance and its ability to scale.
                      </p>
                  </div>
                  <div className="six wide right floated column">
                      <img class="portfolioImg"  alt="portfolio self portrait" src={portfolioImage} />
                  </div>
              </div>
          </div>
        );
    }
}

export default About;