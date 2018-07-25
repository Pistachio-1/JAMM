import React, {Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap'
import Whale from "./../../components/Whale"
import './profile.css';

export default class profile extends Component {
    render() {
        return (
            <Grid className="profile">
                <Row className="profile-content">
                    <Grid>
                        <Row fluid>
                            <h1>Hello</h1>
                        </Row>
                    </Grid>
                </Row>
            </Grid>
                                
        )
    }
}