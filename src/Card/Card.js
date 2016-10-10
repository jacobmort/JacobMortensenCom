import React, { Component, PropTypes } from 'react';
import './Card.css';
import LinkImg from './ic_link_black_24px.svg';

const DEFAULT_STATE = {
  containerHeight: null,
  containerWidth: null,
  xPos: null,
  yPos: null,
  animating: false
}

class Card extends Component {
  constructor() {
    super();
    this.state = Object.assign({}, DEFAULT_STATE);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      containerHeight: e.target.height,
      containerWidth: e.target.width,
      xPos: e.pageX,
      yPos: e.pageY,
      animating: true
    });
    setTimeout(() => {
       this.setState(Object.assign({}, DEFAULT_STATE));
    },1000);
  }

  render() {
    const rippleClass = this.state.animating ? "ripple ripple-effect" : "ripple";
    const rippleStyle = {
      top: this.state.yPos - (this.state.containerHeight),
      left: this.state.xPos - (this.state.containerWidth),
      background: this.state.animating ? "red" : "#FFFFFF"
    }

    return (
      <div className="card">
        <img src={this.props.img} alt="screenshot" />
        <div className="card-title">
          <span>{this.props.title}</span>
          <a href={this.props.pageLink} onClick={this.handleClick}>
            <div style={rippleStyle} className={rippleClass}></div>
            <img src={LinkImg} alt="View Page" />
          </a>
        </div>
        <div className="card-desc">
          {this.props.desc}
        </div>
        <div className="platforms">
          {this.props.platforms.map((platform) => {
            return(
              <a key={platform.alt} href={platform.link}>
                <img src={platform.img} alt={platform.alt}/>
              </a>
            )
          })}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    pageLink: PropTypes.string.isRequired,
    platforms: PropTypes.array.isRequired
}

export default Card;
