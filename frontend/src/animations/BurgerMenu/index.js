import React, {useState} from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import './style.scss';
import WebmotiImage from "./../../media/webmoti.png"
import CappyImage from "./../../media/cappyimg2.PNG"
import ThieveryImage from "./../../media/thieveryGame.png"

// Lifting state up in React with hooks (this is how we share state)
function GetMenuDropdown(props){
    let hamburgerStyle = '';
    const closedStyle = {height: '100%'};
    const openStyle = {height: '0%'};
    props.status === 'open' ? hamburgerStyle = closedStyle :  hamburgerStyle = openStyle;
    const stylingMenu = hamburgerStyle.height;
    return(
            <DropdownMenu dropToggle={stylingMenu} />
    )
};


export const DropdownMenu = (props) =>{
    return(
         <div className="overlay" id="myNav" style={{"height": `${props.dropToggle}` }}>
             <div className="overlay-content">
                 <a className="hamburgerRoutingStyle" href="/">about</a>
                 <a className="hamburgerRoutingStyle" href="/portfolio">portfolio</a>
                 <a className="hamburgerRoutingStyle" href="/contact">contact me</a>
             </div>
        </div>
    );
}

export const About = () => {
    return(
        <div className="aboutAlignments">
            <div className="aboutPageStyling">
                <h1>Hello, my name is Garo Nazarian</h1>
              <p>I'm a professional full stack developer currently working in the Django framework, the majority of my frontend work is done
                  using javascript and the React library.</p>
              <p>B.Sc. in Computer Science, web development specialist.</p>
              <p>Remotely available to work in Easter and Central Time: garonazarian09@gmail.com </p>
            </div>
        </div>
    );
};



export const ContactMe = () => {
    return <div>Contact Me </div>
}


const BurgerMenu = () => {
    // https://reactjs.org/docs/lifting-state-up.html
    // This is a react hook, it allows you to use react states without writing a class!
    const [status, setStatus] = useState('close')

    return(
        <div>
            <GetMenuDropdown status={status} />
            <nav>
                <div
                    className="BurgerMenu__container"
                    role="button"
                    onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
                    <i className={status}></i>
                    <i className={status}></i>
                    <i className={status}></i>
                </div>
            </nav>
        </div>

    );
};


export default BurgerMenu;


