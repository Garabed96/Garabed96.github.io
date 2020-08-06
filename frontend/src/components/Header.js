import React from "react";
import './headerStyle.scss'

class Header extends React.Component{
    render() {
        return(
            <div className="Title">
                <header>
                    <div id="myNav" className="overlay">
                    </div>
                </header>
            </div>
        );
    }
};

export default Header;

// Dropdown Menu for hamburger menu
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_overlay2