import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import "./layout-override.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Benevolous | News Down the Middle"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%",
        padding: "25px 0"
      }}>
      <div style={{ flex: 1 }}>
        {children()}
      </div>
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
