import React, { Component } from 'react';

const SlideThree= (props) => {
  let background = {
    backgroundColor: 'red',
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
          <span>3</span>
          <p>Colors</p>
          <p>Pick any color</p>
        </div>
        <div className="slideBottom">
          <span>&#9679;</span>
        </div>
      </div>
    </div>
  );
}

export default SlideThree;
