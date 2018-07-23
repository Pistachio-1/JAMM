import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import Register from "./../../components/RegisterForm"
import Whitedog from "./../../components/WhiteDog"
import AdditionGame from "../../pages/AdditionGame"
// import Corgi from "./../../components/Corgi"
// import Doggy from "./../../components/Doggy"
import './Home.css'
const GamePic = require("../../components/images/gamepic.png")
const Placeholder=require("../../components/images/200")
const Gif=require("../../components/images/education.gif")



export default class Home extends Component {
    
    render() {
        return (
            <Grid className="home">
                <Row className="content">
                    <Grid>
                        <Row>
                            <Col md={6} className="doggy">
                               <Whitedog className="ruff"/>
                            </Col>
                            <Col md={6} className="RegisterForm">
                                <Register className="register"/>
                            </Col>
                        </Row>
                    </Grid>
                </Row>
                <Row className="mission">

                    <h3 className="missionfont">Our Mission</h3>
                    <Grid>
                        <Row>
                            <Col md={7} className="missionText">
                                <p>Welcome</p>
                            </Col>
                            <Col md={5} className="missionPic">
                            <img className="gif" src={Gif}  alt="educationgif"/>
                            </Col>
                        </Row>
                    </Grid>
                </Row>
                <Row className = "gamesection">
                    <h2> Games: </h2>
                    <div className="addgame">
                        <a href="/additiongame" onClick={AdditionGame}> <img src={GamePic} style={{width: 200, height: 200}} alt="additiongame"/> </a>
                        <img src={Placeholder} style={{width: 200, height: 200}} alt="placeholder"/>
                        <img src={Placeholder} style={{width: 200, height: 200}} alt="placeholder"/>
                        <img src={Placeholder} style={{width: 200, height: 200}} alt="placeholder"/>

                    </div>
                </Row>
                <Row>
                    Resources:
                </Row>
            </Grid>
        )
    }
}
