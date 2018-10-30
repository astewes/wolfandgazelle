import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from "react-helmet";
import { Col } from 'reactstrap';
import img1 from '../../images/img1.jpg';

class ColOne extends Component {
  render() {
    return (
      <Col sm="6" md="4">
        <article className="card mb-4">
          <header className="card-header">
            <div className="card-meta">
              <time className="timeago">
                <span>4 months</span> ago in&nbsp;
                <a href="">Journey</a>
              </time>
            </div>
            <a href="">
              <h4 className="card-title">
                How can we sing about love?
              </h4>
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
    );
  }
}

export default ColOne;

