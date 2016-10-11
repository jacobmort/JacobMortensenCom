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
      width: this.props.rippleWidth ? this.props.rippleWidth : this.props.containerWidth * 2,
      height: this.props.rippleHeight ? this.props.rippleHeight : this.props.containerHeight * 2,
      background: this.state.animating ? this.props.color : "rgba(0,0,0,0)"
    }
    return (
      <span style={rippleStyle} className={rippleClass}></span>
    );
  }
}

Ripple.propTypes = {
  containerWidth:PropTypes.number,
  containerHeight:PropTypes.number,
  rippleWidth: PropTypes.number,
  rippleHeight: PropTypes.number,
  xPos:PropTypes.number,
  yPos:PropTypes.number,
  color: PropTypes.string
}

export default Ripple;
