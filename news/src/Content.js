import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

class Content extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <article className="card mb-4">
              <header className="card-header">
                <div className="card-meta">
                  <a href="">
                    <time className="timeago">
                      4 months ago in Journey
                    </time>
                  </a>
                </div>
                <a href="">
                  <h4 className="card-title">How can we sing about love?</h4>
                </a>
              </header>
              <a href="">
                <img className="card-img" src={img1} alt="" />
              </a>
              <div className="card-body">
                <p className="card-text">
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                </p>
              </div>
            </article>
          </Col>
          <Col md="4">
            <article className="card mb-4">
              <header className="card-header">
                <div className="card-meta">
                  <a href="">
                    <time className="timeago">
                      7 months ago in Work
                    </time>
                  </a>
                </div>
                <a href="">
                  <h4 className="card-title">How can we, how can we sing about ourselves?</h4>
                </a>
              </header>
              <a href="">
                <img className="card-img" src={img2} alt="" />
              </a>
              <div className="card-body">
                <p className="card-text">
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                </p>
              </div>
            </article>
          </Col>
          <Col md="4">
            <article className="card mb-4">
              <header className="card-header">
                <div className="card-meta">
                  <a href="">
                    <time className="timeago">
                      6 months ago in Work
                    </time>
                  </a>
                </div>
                <a href="">
                  <h4 className="card-title">Crying on the news</h4>
                </a>
              </header>
              <a href="">
                <img className="card-img" src={img3} alt="" />
              </a>
              <div className="card-body">
                <p className="card-text">
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                </p>
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
