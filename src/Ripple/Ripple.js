import React, { Component, PropTypes } from 'react';
import './Ripple.css';

const DEFAULT_STATE = {
  animating: false
}

class Ripple extends Component {
  static defaultProps= {
      color: "red"
  }
  constructor() {
    super();
    this.state = Object.assign({}, DEFAULT_STATE);
  }

  componentWillReceiveProps(e) {
    this.setState({
      animating: true
    });
    setTimeout(() => {
       this.setState(Object.assign({}, DEFAULT_STATE));
    }, 950);
  }

  render() {
    const rippleClass = this.state.animating ? "ripple ripple-effect" : "ripple";
    const rippleStyle = {
      top: this.props.yPos - (this.props.containerHeight),
      left: this.props.xPos - (this.props.containerWidth),
      background: this.state.animating ? this.props.color : "white"
    }
    return (
      <div style={rippleStyle} className={rippleClass}></div>
    );
  }
}

Ripple.propTypes = {
  containerWidth:PropTypes.number,
  containerHeight:PropTypes.number,
  xPos:PropTypes.number,
  yPos:PropTypes.number,
  color: PropTypes.string
}

export default Ripple;
