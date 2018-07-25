import React, { Component } from 'react'
import { Button, Form, FormControl, FormGroup, Col, Checkbox, ControlLabel } from "react-bootstrap";
import axios from "axios";

class Modal extends Component {

  state = {
    email: "",
    password: "",
    coins: 0,
    firstName: ""
  };

  // handle any changes to the input fields
  handleBlur = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    sessionStorage.setItem(name, value);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    //todo return the json object of the learner - this is temporary
    const email = this.state.email;
    const self = this;
    axios({
      method: 'get',
      url: '/api/learners/email/' + email,
      responseType: 'json'
    }).then(function (resp) {
      if (resp.data != null) {
        if (resp.data.password === self.state.password) {
          // console.log(resp.data);
          self.setState({ "coins": resp.data.coins });
          sessionStorage.setItem("coins", resp.data.coins);
          self.setState({ "firstName": resp.data.firstName });
          sessionStorage.setItem("firstName", resp.data.firstName);
          sessionStorage.setItem("lastName", resp.data.lastName);
          sessionStorage.setItem("userName", resp.data.userName);
          sessionStorage.setItem("favoritePet", resp.data.favoritePet);
          alert(`Hi ${resp.data.firstName}! It's good to see you again!`);
        } else {
          alert(`I'm sorry, I can't find ${email}. Please check the email and password or go to Home and set up a new account`);
        }
      } else {
        alert(`I'm sorry, I can't find ${email}. Please check the email and password or go to Home and set up a new account`);
      }
    })
  };

  render() {
    return (
      <Form horizontal
      onBlur={this.handleBlur.bind(this)} >
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
              </Col>
          <Col sm={10}>
            <FormControl name="email" type="email" placeholder="Email" />
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
            <Button type="submit" onClick={this.handleFormSubmit}>Sign in</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
export default Modal;

