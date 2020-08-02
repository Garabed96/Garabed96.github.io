import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import './appStyles.css';

class App extends React.Component{
    render() {
        return (
            <div>
                <div className="ui navbar" >
                <Navbar />
                </div>
                <About />
                <hr/>
                <Experience />
                <hr />
                <Contact />
            </div>

        );
    }
}

export default App
