import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="content">
                    <h1>what to add</h1>
                </div>
                <div className="mission">
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
                </div>

            </div>
        )
    }
}
