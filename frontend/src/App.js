import React from "react";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import './appStyles.css';
import GreetingsPage from "./components/GreetingsPage";
import BurgerMenu, {About, ContactMe} from "./animations/BurgerMenu";
import {Portfolio, CappyProject, ThieveryProject, ProjectProject} from "./components/PortfolioPage";
import { WebmotiProject } from "./components/WebmotiProject"
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
                    <Route path="/webmoti-project" exact component={WebmotiProject} />
                    <Route path="/cappy-project" exact component={CappyProject} />
                    <Route path="/thievery-project" exact component={ThieveryProject} />
                    <Route path="/project-project" exact component={ProjectProject} />
                </BrowserRouter>

            </div>

        );
    }
}

export default App




