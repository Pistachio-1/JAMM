import React, { Component } from "react";
import { Grid, Row, Col, Button } from 'react-bootstrap';
// import { Input, FormBtn } from "./../Form"
import {Input} from "./../Form"
import axios from "axios";
import "./register.css"

export default class Register extends Component {
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        email: "",
        coins: 0
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const email = this.state.email;
        const userName = this.state.userName;
        const self = this;
        if (this.state.firstName && this.state.lastName && this.state.userName && this.state.password && this.state.email) {
            //* check userName and email
            axios({
                method: 'get',
                url: '/api/learners/emailoruser/' + email + "/" + userName,
                responseType: 'json'
            }).then(function (resp) {
                if (resp.data != null) {
                    alert(resp.data.email + " or " + resp.data.userName +
                        " is already used\nEnter a different email or user name");
                } else {
                    // not used, save this
                    self.setState({ "coins": 50 });
                    sessionStorage.setItem("coins", self.state.coins);
                    self.setState({ "firstName": self.state.firstName });
                    sessionStorage.setItem("firstName", self.state.firstName);
                    sessionStorage.setItem("lastName", self.state.lastName);
                    sessionStorage.setItem("userName", self.state.userName);
                    sessionStorage.setItem("email", self.state.email);
                    const newLearner = ({
                        firstName: self.state.firstName,
                        lastName: self.state.lastName,
                        userName: self.state.userName,
                        email: self.state.email,
                        password: self.state.password,
                        favoritePet: "",
                        coins: self.state.coins
                    });
                    axios({
                        method: "post",
                        url: "/api/learners/create",
                        responseType: "json",
                        data: newLearner
                    }).then(function (resp) {
                        if (resp.data != null) {
                            alert("Welcome " + self.state.firstName + "!");
                        } else {
                            alert("Hmmm, something went wrong, please try agains");
                        }
                    });
                };
            });
        } else {
            alert("Make sure all required fields have something in them!");
        }
    };

    render() {
        return (
            <div className="registerForm">
                <h2>Your pet is waiting!!!</h2>
                <Grid>
                    <Row>
                        <Col md={6} >
                            <form>
                                <Input
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                    type="Text"
                                    placeholder="First Name (required)"
                                    name="firstName"
                                />
                            </form>
                        </Col>
                        <Col lg={6} >
                            <form>
                                <Input
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                    type="Text"
                                    placeholder="Last Name (required)"
                                    name="lastName"
                                />
                            </form>
                        </Col>
                    </Row>
                    <form>
                        <Input
                            value={this.state.userName}
                            onChange={this.handleInputChange}
                            type="Text"
                            placeholder="Username (required)"
                            name="userName"
                        />
                        <Input
                            value={this.state.Password}
                            onChange={this.handleInputChange}
                            type="Password"
                            placeholder="Password (required)"
                            name="password"
                        />
                        <Input
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            type="Email"
                            placeholder="Email (required)"
                            name="email"
                        />
                        <Button
                            // disabled={!(this.state.author && this.state.title)}
                            type="submit"
                            onClick={this.handleFormSubmit}
                        >
                            Register
                        </Button>
                    </form>
                    <Row>

                    </Row>
                </Grid>
            </div>
        )
    }
}
