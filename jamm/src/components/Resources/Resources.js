import React, { Component } from "react"
// import Animate from 'react-animate.css';
import 'animate.css/animate.css';
import { Grid, Row } from 'react-bootstrap';
import "./Resources.css"
import Bbc from "../images/bbc.png"
import Discovery from "../images/discovery.png"
import Funbrain from "../images/funbrain.png"
import Genius from "../images/genius.png"
import National from "../images/national.png"
import Time from "../images/time.png"

    // <Animate
    //     animationEnter="bounceIn"
    //     animationLeave="bounceOut"
    //     durationEnter={1000}
    //     durationLeave={1000}
    //     component="img" >
    // </Animate>

export default class Resources extends Component {
    render() {
        return (
        <Grid >
            <Row className="resourcesection">
                <h2> Resources: </h2>
                <div className="resources">
                    <a  href="http://www.funbrain.com/"> <img src={Funbrain} alt="Funbrain"  /> </a>
                    <a  href="http://www.bbc.co.uk/history/forkids/index.shtml"> <img src={Bbc} alt="Bbc"  /> </a>
                    <a  href="http://discoverymindblown.com/"> <img src={Discovery} alt="Discovery"  /> </a>
                    <a  href="https://kids.nationalgeographic.com/"> <img src={National} alt="National"  /> </a>
                    <a  href="https://www.timeforkids.com/"> <img src={Time} alt="Time"  /> </a>
                    <a  href="http://www.makemegenius.com/"> <img src={Genius} alt="Genius"  /> </a>
                </div>
            </Row>
        </Grid >
        )
    }
}