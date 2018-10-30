import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

const Footer = () => (
  <footer role="contentinfo"
    style={{
      borderTop: '1px solid #333',
      marginTop: '1.45rem'
    }}>
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
            © [llc] 2018<br/>
            All rights reserved
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer;
