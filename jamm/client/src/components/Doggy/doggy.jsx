import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './doggy.scss'

export default class Doggy extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <div class="dog">
                            <div class="ears"></div>
                            
                            <div class="body">
                                <div class="eyes"></div>
                                <div class="beard">
                                <div class="mouth">
                                <div class="tongue"></div>
                                </div>
                                </div>
                                <div class="belt">
                                <div class="locket"></div>
                                <div class="dot dot1"></div>
                                <div class="dot dot2"></div>
                                <div class="dot dot3"></div>
                                <div class="dot dot4"></div>
                                <div class="tag"></div>
                                </div>
                                <div class="stomach">
                                </div>
                                <div class="legs">
                                <div class="left"></div>
                                <div class="right"></div>
                                </div>
                            </div>
                            <div class="tail">
                            </div>
                        </div>
                    </Col>
                </Row>
           </Grid>
        )
    }
}

