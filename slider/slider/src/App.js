import React, { Component } from 'react';
import Slider from './Slider';
import './App.css';
// To include the default styles
import 'react-rangeslider/lib/index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slider />
      </div>
    );
  }
}

export default App;
