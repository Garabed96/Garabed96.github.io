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

export const DropdownMenu = () => {
    return(
        <div style={{"height": "0%"}}>
            tester
        </div>
        // <div className="overlay" style={getMenuDropdown()} >
        //         <div className="overlay-content">
        //             <a href="#">about</a>
        //             <a href="#">portfolio</a>
        //             <a href="#">Contact</a>
        //         </div>
        // </div>
    );
}


const BurgerMenu = () => {
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
            </div>
        </nav>

    );
};


export default BurgerMenu;