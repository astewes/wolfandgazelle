import React, { Component } from 'react';

const SlideOne= (props) => {
  let background = {
    backgroundColor: 'blue',
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
          <span>1</span>
          <p>Gradient</p>
          <p>Start, end, angle</p>
        </div>
        <div className="slideBottom">
          <span>&#9679;</span>
        </div>
      </div>
    </div>
  );
}

export default SlideOne;
