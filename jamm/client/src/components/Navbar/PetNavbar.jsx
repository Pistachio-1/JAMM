import React, { Component } from 'react'
import {Navbar,Nav,NavItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './PetNavbar.css'
import Login from '../Login'

export default class PetNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"><i className="fas fa-paw"></i> Math with Pets</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/Home">
                        Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/" to="/Additiongame">
                        Game
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/" to="/buypet">
                        Buy Pets
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/" to="/yourpets">
                        Your Pets
                        </NavItem>
                        <NavItem eventKey={5} componentClass={Link} href="/" to="/profile">
                        Your Profile
                        </NavItem>
                        <NavItem>
                        <Login/>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}



