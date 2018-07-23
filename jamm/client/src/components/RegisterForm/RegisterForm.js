import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import { Input, FormBtn } from "./../Form"
import "./register.css"

export default class Register extends Component {
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        email: ""
    }
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.firstName && this.state.lastName && this.state.userName && this.state.password && this.state.email) {
    //      //* PUSH info to data
         
    //     }
    //   };
    render(){
        return(
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
                      />
                      <Input
                          value={this.state.Password}
                          onChange={this.handleInputChange}
                          type="Password"
                          placeholder="Password (required)"
                      />
                      <Input
                          value={this.state.email}
                          onChange={this.handleInputChange}
                          type="Email"
                          placeholder="Email (required)"
                      />
                      <FormBtn
                          disabled={!(this.state.author && this.state.title)}
                          onClick={this.handleFormSubmit}
                      >
                          Register
                    </FormBtn>
                  </form>
                <Row>
                    
                </Row>
            </Grid>
        </div>
        )
    }
}
