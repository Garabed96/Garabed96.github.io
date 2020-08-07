import React, {useState} from "react";
import './style.scss'

// set myNav height to 100%
function getMenuDropdown(props){
    var hamburgerStyle = '';
    const closedStyle = {height: '100%'};
    const openStyle = {height: '0%'};
    props.status === 'open' ? hamburgerStyle = closedStyle :  hamburgerStyle = openStyle;
    return hamburgerStyle;
};

export const DropdownMenu = (props) => {
    return(
        <div style={{"height": "0%"}}>
            {props.status}
        </div>

    );
}

// Lifting state up in React with hooks (this is how we share state)
const MenuToggle = (props) => {
    return(
        <div className="overlay" id="myNav" style={{"height": "100%"}}>
            <div className="overlay-content">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </div>
        </div>
            // <p> The toggle is set to {props.toggle} </p>
        )
}

const BurgerMenu = () => {
    // https://reactjs.org/docs/lifting-state-up.html
    // This is a react hook, it allows you to use react states without writing a class!
    const [status, setStatus] = useState('close')

    return(
            <nav>
                <div
                    className="BurgerMenu__container"
                    role="button"
                    onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
                    <i className={status}></i>
                    <i className={status}></i>
                    <i className={status}></i>
                    < MenuToggle
                      toggle={status}  />
                </div>
            </nav>
    );
};


export default BurgerMenu;

 // <div className="overlay" style={getMenuDropdown()} >
        //         <div className="overlay-content">
        //             <a href="#">about</a>
        //             <a href="#">portfolio</a>
        //             <a href="#">Contact</a>
        //         </div>
        // </div>