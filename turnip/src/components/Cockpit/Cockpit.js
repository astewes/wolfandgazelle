import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
  return (
    <div className="Cockpit">
      <button
        className="btn"
        clicked={props.toggleResultsHandler}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;
