import React, { Component } from "react"
import {Modal,Button} from 'react-bootstrap';
import "./Login.css"
import LoginForm from "../Modal/Modal"




export default class Login extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
      render(Login) {
        return (
            <div>
            <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
             Login
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <LoginForm />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
    }
}
      
   


              