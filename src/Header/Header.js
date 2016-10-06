import React, { Component } from 'react';
import './Header.css';
import selectBackground from './HeaderBackgrounds';

import me from './images/me.png';
import twitterIcon from './images/twitter-icon.png';
import linkedinIcon from './images/linked-in-icon.png';
import githubIcon from './images/GitHub-Mark-Light-32px.png'

class Header extends Component {
  constructor(props) {
    super();
    const selectedBackground = selectBackground();
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
  }

  render() {
    return (
      <header style={this.state.headerStyle}>
        <div className="wrapper">
            <img className="profile" src={me} alt="myself"/>
            <div>
              <h3>Jacob Mortensen</h3>
              <div>Software Developer</div>
              <div className="networks">
                <a href="https://www.linkedin.com/in/jacob-mortensen-40266a47">
                  <img src={linkedinIcon} alt="see my linkedin"/>
                </a>
                <a href="https://www.twitter.com/jacobmort">
                  <img src={twitterIcon} alt="contact me on twitter"/>
                </a>
                <a href="https://www.github.com/ubien">
                  <img src={githubIcon} alt="see my github"/>
                </a>
              </div>
            </div>
            <div className="header-desc">
              <i>{this.state.headerDesc}</i>
            </div>
        </div>
      </header>
    );
  }
}

export default Header;
