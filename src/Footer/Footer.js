import React, { Component } from 'react';
import './Footer.css';
import reactLogo from './React.js_logo.svg';
import {Ripple, RippleHelper} from 'react-ripple-css';

class Footer extends Component {
  constructor(props) {
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
    return(
      <div className="footer">
        <div className="copyright">&copy; 2016 Jacob Mortensen</div>
        <div className="platform">
          <Ripple
            containerWidth={this.state.containerWidth}
            containerHeight={this.state.containerHeight}
            xPos={this.state.clickXPos}
            yPos={this.state.clickYPos}
          />
          <i>Built using</i>
          <a href="https://facebook.github.io/react/" onClick={this.handleClick}>
            <img src={reactLogo} alt="Facebook React" />
          </a>
          <a href="https://github.com/jacobmort/JacobMortensenCom" onClick={this.handleClick}>
            <i>source available </i>
          </a>
        </div>
      </div>
    )
  }
}

export default Footer;
