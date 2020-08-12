import PortfolioImage from "./../media/PortfolioImg.PNG"
import WebmotiImage from "../media/webmoti.png";
import CappyImage from "../media/cappyimg2.PNG";
import ThieveryImage from "../media/thieveryGame.png";
import React from "react";
import './portfolioStyle.scss';



export const Portfolio = () => {
    return(
        <div className="portfolioPageStyling">
            <div className="portfolioPageStylingGrid ui two column grid">
                <div className="column smallScreenOpt">
                    <div className="ui fluid card">
                        <div className="image">
                            <img className="imageStyling" alt="webmoti image placeholder" src={WebmotiImage} />
                        </div>
                        <div className="content">
                            <a className="header">webmoti</a>
                        </div>
                    </div>
                </div>
                <div className="column smallScreenOpt">
                    <div className="ui fluid card">
                        <div className="image">
                            <img className="imageStyling" src={CappyImage} alt="Cappy Project display" />
                        </div>
                        <div className="content">
                            <a className="header">cappy</a>
                        </div>
                    </div>
                </div>
                <div className="column smallScreenOpt">
                    <div className="ui fluid card">
                        <div className="image">
                            <img className="imageStyling" src={ThieveryImage} alt="Thievery gameplay image" />
                        </div>
                        <div className="content">
                            <a className="header">Thievery</a>
                        </div>
                    </div>
                </div>
                <div className="column smallScreenOpt">
                    <div className="ui fluid card">
                        <div className="image">
                            <img className="imageStyling" src={PortfolioImage} alt="Portfolio Image displaying project" />
                        </div>
                        <div className="content">
                            <a className="header">portfolio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}