import React, { Component } from "react"
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./doggy.css"

export default class OurMission extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Our Mission</h2>
                    <p>TBA</p>
                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>
            </Grid>
        )
    }
}