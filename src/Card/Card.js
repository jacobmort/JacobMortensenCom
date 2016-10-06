import React, { Component, PropTypes } from 'react';
import Ink from 'react-ink';
import './Card.css';
import LinkImg from './ic_link_black_24px.svg';

class Card extends Component {
  constructor() {
    super();
    this.clickLink = this.clickLink.bind(this);
  }

  clickLink(e) {
    window.location = e.target.parentElement.getAttribute('href');
  }
  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt="screenshot" />
        <div className="card-title">
          <span>{this.props.title}</span>
          <span href={this.props.pageLink} onClick={this.clickLink}>
            <Ink />
            <img src={LinkImg} alt="View Page" />
          </span>
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
