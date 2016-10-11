import React, { Component, PropTypes } from 'react';
import './Card.css';
import Ripple from '../Ripple/Ripple';
import LinkImg from './ic_link_black_24px.svg';

class Card extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      containerHeight: null,
      containerWidth: null,
      clickXPos: null,
      clickYPos: null
    }
  }

  handleClick(e) {
    this.setState({
      containerHeight: e.target.height,
      containerWidth: e.target.width,
      clickXPos: e.pageX,
      clickYPos: e.pageY
    });
  }

  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt="screenshot" />
        <div className="card-title">
          <span>{this.props.title}</span>
          <a href={this.props.pageLink} onClick={this.handleClick}>
            <Ripple
              containerWidth={this.state.containerWidth}
              containerHeight={this.state.containerHeight}
              xPos={this.state.clickXPos}
              yPos={this.state.clickYPos}
            />

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
