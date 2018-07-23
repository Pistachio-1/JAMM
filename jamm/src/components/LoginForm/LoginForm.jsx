import React, { Component } from 'react';
import {Form,FormGroup,Col,ControlLabel,FormControl,Checkbox,Button} from 'react-bootstrap'
import './LoginForm.css'

export default class LoginForm extends Component {
    render() {
        return (
            <div>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                        Username
                        </Col>
                        <Col sm={10}>
                        <FormControl type="username" placeholder="Username" />
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
                        <Button type="submit">Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}