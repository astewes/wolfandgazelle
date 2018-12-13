import React, { Component } from 'react';
import Result from './Result/Result';

const results = (props) => props.results.map( (result, index) => {
  // pass a single result to the map method and run on every element in the persons array
  return (
    <Result
    clicked={() => props.clicked(index)}
    name={result.name}
    age={result.age}
    key={index}
    changed={(event) => props.changed(event, result.id)} />
  )
});

export default results;
