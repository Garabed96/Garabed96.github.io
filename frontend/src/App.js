import React from "react";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import './appStyles.css';
import GreetingsPage from "./components/GreetingsPage";
import BurgerMenu, {About, Portfolio, ContactMe} from "./animations/BurgerMenu";
import { BrowserRouter, Route } from 'react-router-dom';





class App extends React.Component{
    render() {
        return (
            <div>

                <BurgerMenu />
                <BrowserRouter>
                    <Route path="/" exact component={About} />
                    <Route path="/portfolio" exact component={Portfolio} />
                    <Route path="/contact" exact component={ContactMe} />
                </BrowserRouter>

            </div>

        );
    }
}

export default App
