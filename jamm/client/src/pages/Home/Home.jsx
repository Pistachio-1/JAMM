import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import Register from "./../../components/RegisterForm";
import Resources from "./../../components/Resources";
import Whitedog from "./../../components/WhiteDog";
// import Corgi from "./../../components/Corgi"
// import Doggy from "./../../components/Doggy"
import './Home.css';
const Gif = require("../../components/images/bulb.gif");



export default class Home extends Component {

    render() {
        return (
            <Grid className="home">
                <Row className="content">
                    <Grid>
                        <Row>
                            <Col md={6} className="doggy">
                                <Whitedog className="ruff" />
                            </Col>
                            <Col md={6} className="RegisterForm">
                                <Register className="register" />
                            </Col>
                        </Row>
                    </Grid>
                </Row>
                <Row className="mission">
                    <h3 className="missionfont">Our Mission</h3>
                    <Grid>
                        <Row>
                            <Col md={6} className="missionText">
                                <p>At Math With Pets, it is our goal for children to enjoy learning math and responsibility all at once.
                                    Our games encourage a critical thinking approach to mathematics, rather than a memorized one.
                                    This has been proven to lead to long term success, as it supports the learning of reasoned decisions and judgements.
                                    Math for Pets offers a store where its users can buy pets based off their earnings from playing the games.
                                    This aims to teach about responsibility, budgeting and working hard for reward.
                                    Simply put, we are dedicated to helping students around the US rise from its mediocre status
                                    the STEM fields in a way that is fun, interactive and enjoyable.</p>
                            </Col>
                            <Col md={4} className="missionPic">
                                <img className="gif" src={Gif} alt="educationgif" />
                            </Col>
                        </Row>
                    </Grid>
                </Row>
                <Resources />
            </Grid>
        )
    }
}
