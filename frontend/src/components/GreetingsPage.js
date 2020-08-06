import React from "react";
import './greetingStyles.css'
class GreetingsPage extends React.Component{
    render() {
        return(
          <div className="font-styling">
              <div className="box">
                  <div className="btn not-active">
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
              </div>
          </div>
        );
    }
}

export default GreetingsPage;