import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import "./footer.css"

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Grid>
                    <Row>
                        <Col md={1} >
                        <a href="/" className="brand"><i className="fas fa-paw"></i></a>
                        </Col>
                        <Col md={3} className= "follow">
                            <div className="section">
                                <a href="/" className="socialmedia" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
                                <a href="/" className="socialmedia" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                                <a href="/" className="socialmedia" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
                            </div>
                        </Col>
                        <Col md={5} className = "about">
                        <div className="section">
                            <a href="/" className="aboutsection" target="_blank">About Us</a>
                            <a href="/" className="aboutsection" target="_blank">Contact Us</a>
                            <a href="/" className="aboutsection" target="_blank">FAQ</a>
                        </div>
                        </Col>
                    </Row>

                </Grid>
            </footer>
        )
    }
}