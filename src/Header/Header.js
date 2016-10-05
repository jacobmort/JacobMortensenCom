import React, { Component } from 'react';
import Ink from 'react-ink';
import './Header.css';
import HeaderBackgrounds from './HeaderBackgrounds';

import me from './images/me.png';
import emailIcon from './images/ic_email_white_24px.svg';
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
  }

  render() {
    return (
      <header style={this.state.headerStyle}>
        <div>
            <img className="profile" src={me} alt="myself"/>
            <div>
              <h3>Jacob Mortensen</h3>
              <div>Software Developer</div>
              <div className="networks">
                <Ink />
                <img src={linkedinIcon} alt="see my linkedin"/>
                <img src={twitterIcon} alt="contact me on twitter"/>
                <img src={emailIcon} alt="contact me via email"/>
                <img src={githubIcon} alt="see my github"/>
              </div>
            </div>
            <div className="header-desc"><i>{this.state.headerDesc}</i></div>
        </div>
      </header>
    );
  }
}

export default Header;
