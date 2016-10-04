import React, { Component, PropTypes } from 'react';
import './Card.css';
import LinkImg from './ic_link_black_24px.svg';

class Card extends Component {
  constructor() {
    super();
    this.clickLink = this.clickLink.bind(this);
  }

  clickLink() {
    
  }
  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt="screenshot" />
        <div className="card-title">
          <span>{this.props.title}</span>
          <span>
          <a href={this.props.pageLink} target="_blank" rel="noopener">
            <img src={LinkImg} alt="View Page"/>
          </a>
          </span>
        </div>
        <div className="card-desc">
          {this.props.desc}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
    title: PropTypes.String,
    desc: PropTypes.String,
    img: PropTypes.String,
    pageLink: PropTypes.String
}

export default Card;
