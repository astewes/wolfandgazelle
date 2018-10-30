import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Col } from 'reactstrap';
import img2 from '../../images/img2.jpg';

class ColTwo extends Component {
  render() {
    return (
      <Col sm="6" md="4">
        <article className="card mb-4">
          <header className="card-header">
            <div className="card-meta">
              <time className="timeago">
                <span>7 months</span> ago in&nbsp;
                <a href="">Work</a>
              </time>
            </div>
            <a href="">
              <h4 className="card-title">
                How can we, how can we sing about ourselves?
              </h4>
            </a>
          </header>
          <a href="">
            <img className="card-img" src={img2} alt="" />
          </a>
          <div className="card-body">
            <p className="card-text">
              Etiam rhoncus. <Link to="/">Maecenas</Link> tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
            </p>
          </div>
        </article>
      </Col>
    );
  }
}

export default ColTwo;
