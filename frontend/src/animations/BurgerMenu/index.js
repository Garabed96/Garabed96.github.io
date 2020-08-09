import React, {useState} from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import './style.scss';

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
                 <a href="#">OK this is example 1</a>
                 <a href="#">OK this is example 1</a>
                 <a href="#">OK this is example 1</a>
             </div>
        </div>
    );
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


