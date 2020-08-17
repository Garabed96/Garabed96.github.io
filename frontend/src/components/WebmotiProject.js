import React from "react";
import "./WebmotiStyle.scss"
import { Container, Header, Message, Segment } from "semantic-ui-react";

import "pure-react-carousel/dist/react-carousel.es.css";
import WebmotiCarousel from './Carousel/Components/WebmotiCarousel'


export const WebmotiProject = () => {
    return(
        <div className="webmoti-page-content">
            <h1>Webmoti</h1>
            <h3>Webmoti Web Application webrtc javascript on top of the nodejs framework. </h3>
            <hr />
            <p>The project image would go here </p>

            {/*THE IMAGE GOES HERE*/}
            <Container style={{ margin: 20 }}>
                <Header  />
            <Segment attached="bottom">
                <WebmotiCarousel />
            </Segment>
            </Container>

            <hr />
            <h1>About this project</h1>
            <p>information about the project</p>
            <p>more information about the project</p>
            <br />
            <br />
            <h1>Technical Specifications</h1>
            <p>Programming tools used while working on this project</p>
            <hr />
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <h1 style={{"paddingTop": "5rem"}}>Comment section here...</h1>
        </div>
        );
}
