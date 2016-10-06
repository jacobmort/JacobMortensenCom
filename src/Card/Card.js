import React, { Component, PropTypes } from 'react';
import './Card.css';
import LinkImg from './ic_link_black_24px.svg';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt="screenshot" />
        <div className="card-title">
          <span>{this.props.title}</span>
          <a href={this.props.pageLink} >
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
