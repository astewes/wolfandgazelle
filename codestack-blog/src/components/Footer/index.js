import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <footer role="contentinfo">
        <Container>
          <Row>
            <Col>
              <Nav className="navbar">
                <NavItem>
                  <NavLink href="">Privacy policy</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Terms</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Feedback</NavLink>
                </NavItem>
              </Nav>
              <div className="copy">
                © 1984 2018<br/>
                All rights reserved
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
