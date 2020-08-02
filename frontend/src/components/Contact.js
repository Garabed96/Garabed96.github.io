import React from "react";

class Contact extends React.Component{
    render() {
        return(
          <div className="ui middle aligned stackable grid container about-container">
            <h2>Contact Me</h2>
              <div className="row ui grid">
                  <div className="six wide column">
                    <div className="row">
                        <a style={{color: 'black'}} target="_blank" href="https://github.com/Garabed96">
                            <i className="huge github icon" href="https://github.com/Garabed96"></i>
                        </a>
                        <a style={{color:'black'}} target="_blank" href="https://www.linkedin.com/in/garo-nazarian-712330119/">
                            <i className="huge linkedin icon"></i>
                        </a>

                    </div>
                  </div>
                  <div className="eight wide right floated column">
                          <form id="contact-form" method="POST">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control"  />
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" rows="5" />
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                  </div>
              </div>
          </div>
        );
    }

}

export default Contact;