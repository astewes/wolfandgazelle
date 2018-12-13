import React from 'react';

const person = (props) => {
  return (
    <div className="Person">
      <p>I'm {props.name} and I am {props.age} old!</p>
      <p>{props.children}</p>
      <input type="text" />
    </div>
  )
};

export default person;
