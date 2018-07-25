import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import Register from "./../../components/RegisterForm"
import Resources from "./../../components/Resources"
import Whitedog from "./../../components/WhiteDog"
import AdditionGame from "../../pages/AdditionGame"
// import Corgi from "./../../components/Corgi"
// import Doggy from "./../../components/Doggy"
import './Home.css'
const GamePic = require("../../components/images/gamepic.png")
const Placeholder=require("../../components/images/200.png")
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
                                <p>According to the international rankings of the OECD countries, 
                                   the US education system is quite mediocre. In 2015, the US hit the international mean for reading and science literacy, 
                                   however, in mathematics , the US was below average. </p>
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
                        <a href="/additiongame" onClick={AdditionGame}> <img src={GamePic} style={{width: 300, height: 200}} alt="additiongame"/> </a>
                        <img src={Placeholder} alt="placeholder"/>
                        <img src={Placeholder} alt="placeholder"/>
                        <img src={Placeholder} alt="placeholder"/>

                    </div>
                </Row>
                <Resources/>
            </Grid>
        )
    }
}
