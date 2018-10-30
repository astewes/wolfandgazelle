import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <header role="banner">
        <Navbar>
          <Nav className="navbar">
            <NavItem>
              <NavLink href="">Link 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Link 2</NavLink>
            </NavItem>
          </Nav>
          <NavbarBrand href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </NavbarBrand>
        </Navbar>
      </header>
    );
  }
}

export default Header;
