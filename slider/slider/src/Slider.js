import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import SwipeSlide from './SwipeSlide';

class Horizontal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      slideCount: 1,
      value: 20
    };
  }

  handleChangeStart = () => {
    console.log('Change event started');

    this.setState({
      value: this.state.value
    })
  }

  handleChange = value => {
    this.setState({
      value: value
    })

    if (this.state.value >= 50 && this.state.value <= 80) {
      if (this.state.slideCount === 1) {
        this.setState({
          slideCount: 2
        })
      }
      if (this.state.slideCount === 2) {
        this.setState({
          slideCount: 3
        })
      }
      if (this.state.slideCount === 3) {
        this.setState({
          slideCount: 2
        })
      }
    }

    // var x = this.state.value;
    // switch (true) {
    //     case (x < 45):
    //         this.state.slideCount = 1;
    //         break;
    //     case (x < 9):
    //         alert("between 5 and 8");
    //         break;
    //     case (x < 12):
    //         alert("between 9 and 11");
    //         break;
    //     default:
    //         alert("none");
    //         break;
    // }
  }

  handleChangeComplete = () => {
    console.log('Change event completed: ', this.state.value);

    this.setState({
      value: 20
    })
  }

  render () {
    const { value } = this.state;
    return (
      <div className='slider'>
        { this.state.slideCount === 1 ? <SlideOne /> : null }
        { this.state.slideCount === 2 ? <SlideTwo /> : null }
        { this.state.slideCount === 3 ? <SlideThree /> : null }
        <Slider
          min={0}
          max={100}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}

export default Horizontal;
