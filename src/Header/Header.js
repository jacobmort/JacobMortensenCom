import React, { Component } from 'react';
import './Header.css';
import Ripple from 'react-ripple-css';
import selectBackground from './HeaderBackgrounds';

import me from './images/me.png';
import twitterIcon from './images/twitter-icon.png';
import linkedinIcon from './images/linked-in-icon.png';
import githubIcon from './images/GitHub-Mark-Light-32px.png'

const NETWORKS = [
  {
    href: "https://www.linkedin.com/in/jacob-mortensen-40266a47",
    src: linkedinIcon,
    alt: "See my Linkedin"
  }, {
    href: "https://www.twitter.com/jacobmort",
    src: twitterIcon,
    alt: "See my Twitter"
  }, {
    href: "https://www.github.com/ubien",
    src: githubIcon,
    alt: "See my Github"
  }
]

class Header extends Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      headerStyle: null,
      headerDesc: null,
      containerHeight: null,
      containerWidth: null,
      clickXPos: null,
      clickYPos: null
    };
  }

  componentDidMount() {
    const selectedBackground = selectBackground();
    let background = selectedBackground.img;
    if (window.matchMedia("(max-width: 640px)").matches) {
      background = selectedBackground.imgSm
    }
    const headerStyle = {
      background: `url(${background})`,
      backgroundPosition: "center fixed",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };
    this.setState({
      headerStyle: headerStyle,
      headerDesc: selectedBackground.desc,
      containerHeight: null,
      containerWidth: null,
      clickXPos: null,
      clickYPos: null
    });
  }

  handleClick(e) {
    const rect = e.target.getBoundingClientRect();
    this.setState(
      Object.assign(this.state, {
        containerHeight: rect.height,
        containerWidth: rect.width,
        clickXPos: e.pageX,
        clickYPos: e.pageY
        })
    );
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
                <Ripple
                  containerWidth={this.state.containerWidth}
                  containerHeight={this.state.containerHeight}
                  xPos={this.state.clickXPos}
                  yPos={this.state.clickYPos}
                  color="grey"
                />
                {NETWORKS.map((network) => {
                  return (
                    <a key={network.href} href={network.href} onClick={this.handleClick}>
                      <img src={network.src} alt={network.alt}/>
                    </a>
                  )
                })}
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
