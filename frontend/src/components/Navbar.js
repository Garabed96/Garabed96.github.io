import React from "react";
import './navStyles.css'


class Navbar extends React.Component{


    render() {
        return(
            <div className="ui inverted vertical masthead center aligned segment">
                <div className="ui container navbar-padding">
                    <div className="ui large secondary inverted pointing menu">
                        <a className="active item">About</a>
                        <a className="item">Experience</a>
                        <a className="item">Projects</a>
                    </div>
                    <div className="ui text container">
                        <h1 className="ui inverted header navbar-header">
                            Garo Nazarian
                        </h1>
                        <h2 className="navbar-header" >Full Stack Developer</h2>
                        <div className="ui huge primary button portfolio-button" style={{ margin: '3rem 0 0 0' }}>
                            Portfolio
                            <i className="right arrow icon"></i>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Navbar;



