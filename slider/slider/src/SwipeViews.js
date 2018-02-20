import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  flex: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  flexVertical: {
    flexFlow: 'column nowrap',
    textAlign: 'center'
  },
  flexChild: {
    flex: '0 0 50%',
    height: '50%',
    width: '100%'
  },
  slide: {
    count: {
      display: 'inline-block',
      color: '#fff',
      fontWeight: '400',
      margin: '0 auto',
      padding: '5px 10px',
      borderRadius: '15px'
    },
    h2: {
      fontSize: '42px',
      fontWeight: '900',
      marginTop: '10px',
      marginBottom: '5px'
    },
    p: {
      color: '#999',
      fontSize: '24px',
      fontWeight: '300',
      margin: '0'
    },
    fpo: {
      borderRadius: '50%',
      background: '#fff',
      width: '50px',
      height: '50px'
    }
  }
};

const slides = [
  {
    count: 1,
    h2: 'Gradient',
    p: 'Start, end, angle',
    gradient: {
      background: 'linear-gradient(to right, rgb(138, 43, 255) 0%, rgb(120, 87, 255) 20%, rgb(89, 164, 255) 60%, rgb(65, 231, 254) 100%)'
    }
  },
  {
    count: 2,
    h2: 'Presets',
    p: 'Manage presets',
    gradient: {
      background: 'linear-gradient(to right, rgb(70, 237, 255) 0%, rgb(112, 238, 209) 60%, rgb(243, 242, 60) 100%)'
    }
  },
  {
    count: 3,
    h2: 'Colors',
    p: 'Pick any color',
    gradient: {
      background: 'linear-gradient(to right, rgb(252, 246, 0) 0%, rgb(251, 200, 61) 40%, rgb(246, 54, 119) 100%)'
    }
  }
];

class SwipeMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  handleChangeIndex = index => {
    this.setState({ index });
  };

  render() {
    const { index } = this.state;

    return (
      <SwipeableViews
        onChangeIndex={this.handleChangeIndex}
        enableMouseEvents
        threshold={8}>
        {slides.map((slide, currentIndex) => {
          return (
            <div key={currentIndex} style={Object.assign({}, styles.flex)}>
              <div style={Object.assign({}, styles.flexChild)}>
                <div style={Object.assign({}, styles.flex)}>
                  <span style={Object.assign({}, slide.gradient, styles.slide.count)}>
                    { slide.count }
                  </span>
                  <h2 style={Object.assign({}, styles.slide.h2)}>
                    { slide.h2 }
                  </h2>
                  <p style={Object.assign({}, styles.slide.p)}>
                    { slide.p }
                  </p>
                </div>
              </div>
              <div style={Object.assign({}, slide.gradient, styles.flexChild)}>
                <div style={Object.assign({}, styles.flex)}>
                  <span style={Object.assign({}, styles.slide.fpo)}></span>
                </div>
              </div>
            </div>
          );
        })}
      </SwipeableViews>
    );
  }
}

export default SwipeMe;
