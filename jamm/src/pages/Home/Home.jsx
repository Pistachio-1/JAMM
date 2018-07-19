import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import Register from "./../../components/RegisterForm"
// import Corgi from "./../../components/Corgi"
// import Whitedog from "./../../components/WhiteDog"
// import Doggy from "./../../components/Doggy"
import './Home.css'



export default class Home extends Component {
    
    render() {
        return (
            <Grid className="home">
                <Row className="content">
                    <Grid>
                        <Row>
                            <Col md={6} className="doggy">
                               <p> fill in the blank </p>
                               {/* <Doggy className="ruff"/> */}
                            </Col>
                            <Col md={6} className="RegisterForm">
                                <Register className="register"/>
                            </Col>
                        </Row>
                    </Grid>
                </Row>
                <Row className="mission">
                    <p>About Math With Pets</p>
                    <h3 className="missionfont">Our Mission</h3>
                    <Grid>
                        <Row>
                            <Col xs={12} md={8} className="missionText">
                                <p>blahblah our mission blahblah</p>
                            </Col>
                            <Col xs={6} md={4} className="missionPic">
                                <p> insert pic </p>
                            </Col>
                        </Row>
                    </Grid>
                </Row>
            </Grid>
        )
    }
}
