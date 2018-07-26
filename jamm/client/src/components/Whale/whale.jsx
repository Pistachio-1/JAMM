import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './whale.css'

export default class Whale extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                    <div class="whale">
                        <div class="whale-body">
                                <div class="whale-eyes"></div>
                                <div class="teeth"></div>
                        </div>
                        <div class="whale-tail">
                        </div>
                        <div class="whale-circle">
                        </div>
                        <div class="flipper1">
                        </div>
                        <div class="flipper2">
                        </div>
                        <div class="spout">
                        </div>
                        <div class="spray">
                        </div>
			        </div>
                    </Col>
                </Row>
            </Grid>    
        )
    }
}