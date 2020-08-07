import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import './appStyles.css';
import GreetingsPage from "./components/GreetingsPage";
import BurgerMenu, {DropdownMenu} from "./animations/BurgerMenu";

import Header from "./components/Header";

class App extends React.Component{
    render() {
        return (
            <div>
                <BurgerMenu />


            </div>

        );
    }
}

export default App
