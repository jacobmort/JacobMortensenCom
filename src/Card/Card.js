import React, { Component, PropTypes } from 'react';
import './Card.css';
import Ripple from 'react-ripple-css';
import RippleHelper from '../RippleHelper';
import LinkImg from './ic_link_black_24px.svg';

class Card extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = RippleHelper.getInitialState();
  }

  handleClick(e) {
    this.setState(
      Object.assign(this.state, RippleHelper.handleClick(e))
    );
  }

  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt="screenshot" />
        <div className="card-title">
          <span className="name">{this.props.title}</span>
          <span className="position"><i>{this.props.position}</i></span>
          <a href={this.props.pageLink} onClick={this.handleClick}>
            <Ripple
              containerWidth={this.state.containerWidth}
              containerHeight={this.state.containerHeight}
              xPos={this.state.clickXPos}
              yPos={this.state.clickYPos}
              color="grey"
            />
            <img src={LinkImg} alt="View Page" />
          </a>
        </div>
        <div className="card-desc" dangerouslySetInnerHTML={{__html: this.props.desc}} />
        <div className="platforms">
          {this.props.platforms.map((platform) => {
            return(
              <a onClick={this.handleClick} key={platform.alt} href={platform.link}>
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
    position: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    pageLink: PropTypes.string.isRequired,
    platforms: PropTypes.array.isRequired
}

export default Card;
