import React, { Component } from 'react';
import Ink from 'react-ink';
import './Header.css';
import HeaderBackgrounds from './HeaderBackgrounds';

import me from './images/me.png';
import twitterIcon from './images/twitter-icon.png';
import linkedinIcon from './images/linked-in-icon.png';
import githubIcon from './images/GitHub-Mark-Light-32px.png'

class Header extends Component {
  constructor(props) {
    super();
    const selectedBackground = HeaderBackgrounds[0];
    const headerStyle = {
      background: `url(${selectedBackground.img})`,
      backgroundPosition: "center fixed",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };
    this.state = {
      headerStyle: headerStyle,
      headerDesc: selectedBackground.desc
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    window.location = e.target.parentElement.getAttribute('href');
  }

  render() {
    return (
      <header style={this.state.headerStyle}>
        <div>
            <img className="profile" src={me} alt="myself"/>
            <div>
              <h3>Jacob Mortensen</h3>
              <div>Software Developer</div>
              <div className="networks" onClick={this.handleClick}>
                <span href="https://www.linkedin.com/in/jacob-mortensen-40266a47">
                  <Ink />
                  <img src={linkedinIcon} alt="see my linkedin"/>
                </span>
                <span href="https://www.twitter.com/jacobmort">
                  <Ink />
                  <img src={twitterIcon} alt="contact me on twitter"/>
                </span>
                <span href="https://www.github.com/ubien">
                  <Ink />
                  <img src={githubIcon} alt="see my github"/>
                </span>
              </div>
            </div>
            <div className="header-desc"><i>{this.state.headerDesc}</i></div>
        </div>
      </header>
    );
  }
}

export default Header;
