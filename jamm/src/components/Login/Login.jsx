import React, { Component } from "react"
import {Form, FormGroup,FormControl,Col, ControlLabel, Checkbox,Button,Grid,Row} from "react-bootstrap";
import "./Login.css"


export default class Login extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} md={9}>
                            <Form horizontal>
                                <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" placeholder="Email" />
                                </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="Password" />
                                </Col>
                                </FormGroup>

                                <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Checkbox>Remember me</Checkbox>
                                </Col>
                                </FormGroup>

                                <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit">Login</Button>
                                </Col>
                                </FormGroup>
                            </Form>;
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}