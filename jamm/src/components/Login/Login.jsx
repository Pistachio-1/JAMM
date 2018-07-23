import React, { Component } from "react"
import { Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Button, Grid, Row } from "react-bootstrap";
import "./Login.css"

class Login extends Component {

    state = {
        email: "",
        password: ""
    };

    // handle any changes to the input fields
    handleBlur = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        alert(`email: ${this.state.email}\nPassword: ${this.state.password}`);
    };

    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} md={9}>
                            <Form horizontal
                            onBlur={this.handleBlur.bind(this)} >
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Email
                                </Col>
                                    <Col sm={10}>
                                        <FormControl name="email" type="email" placeholder="Email"/>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Password
                                </Col>
                                    <Col sm={10}>
                                        <FormControl name="password" type="password" placeholder="Password" />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col smOffset={2} sm={10}>
                                        <Checkbox>Remember me</Checkbox>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col smOffset={2} sm={10}>
                                        <Button onClick={this.handleFormSubmit}>Login</Button>
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

export default Login;