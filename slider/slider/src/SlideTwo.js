import React, { Component } from 'react';

const SlideTwo= (props) => {
  let background = {
    backgroundColor: 'green',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    left: '8px',
    right: '8px',
    top: '8px',
    bottom: '8px'
  }

  return (
    <div style={background} className="slide">
      <div className="slideOne">
        <div className="slideTop">
          <span>2</span>
          <p>Presets</p>
          <p>Manage presets</p>
        </div>
        <div className="slideBottom">
          <span>&#9679;</span>
        </div>
      </div>
    </div>
  );
}

export default SlideTwo;
