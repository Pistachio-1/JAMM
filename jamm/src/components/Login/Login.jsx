import React, { Component } from "react"
import {NavItem, Modal,Button,Popover,Tooltip,OverlayTrigger,label,input} from 'react-bootstrap';
import "./Login.css"
// if I am importing a componenet I need to name the componenet and name where its coming from 


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
        const popover = (
            <Popover id="modal-popover" title="popover">
              very popover. such engagement
            </Popover>
          );
          const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
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
                  <Modal />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
    }
    

            