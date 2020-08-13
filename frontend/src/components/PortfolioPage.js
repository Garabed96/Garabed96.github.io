import PortfolioImage from "./../media/PortfolioImg.PNG"
import WebmotiImage from "../media/webmoti.png";
import CappyImage from "../media/cappyimg2.PNG";
import ThieveryImage from "../media/thieveryGame.png";
import React from "react";
import './portfolioStyle.scss';
import { BrowserRouter } from "react-router-dom";

const triggerMe = () =>{
}

export const Portfolio = () => {
    return(
        <div className="portfolioPageStyling">
            <div className="portfolioPageStylingGrid ui two column grid">
                <div className="column smallScreenOpt" >
                    <a href="/webmoti-project" >
                    <div className="ui fluid card">
                        <div className="image">
                            <img className="imageStyling" alt="webmoti image placeholder" src={WebmotiImage} />
                        </div>
                        <div className="content">
                            <a className="header">webmoti</a>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="column smallScreenOpt">
                    <a href="cappy-project" >
                    <div className="ui fluid card">
                        <div className="image">
                            <img className="imageStyling" src={CappyImage} alt="Cappy Project display" />
                        </div>
                        <div className="content">
                            <a className="header">cappy</a>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="column smallScreenOpt">
                    <a href="thievery-project">

                        <div className="ui fluid card">
                            <div className="image">
                                <img className="imageStyling" src={ThieveryImage} alt="Thievery gameplay image" />
                            </div>
                            <div className="content">
                                <a className="header">Thievery</a>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="column smallScreenOpt">
                    <a href="project-project">
                        <div className="ui fluid card">
                            <div className="image">
                                <img className="imageStyling" src={PortfolioImage} alt="Portfolio Image displaying project" />
                            </div>
                            <div className="content">
                                <a className="header">portfolio</a>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    );
}

export const WebmotiProject = () => {
    return(
            <div>This is the portfolio Project page</div>
        );
}




export const CappyProject = () => {
    return(
            <div>This is the Cappy Project page</div>
        );
}


export const ThieveryProject = () => {
    return(
            <div>This is the Thievery Project page</div>
        );
}


export const ProjectProject = () => {
    return(
            <div>This is the Projects Project page</div>
        );
}




