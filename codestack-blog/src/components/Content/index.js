import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ColOne from './ColOne';
import ColTwo from './ColTwo';
import ColThree from './ColThree';

class Content extends Component {
  render() {
    return (
      <Container>
        <Row>
          <ColOne />
          <ColTwo />
          <ColThree />
        </Row>
      </Container>
    );
  }
}

export default Content;
