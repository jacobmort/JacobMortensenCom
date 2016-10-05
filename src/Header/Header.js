import React, { Component } from 'react';
import './Header.css';
import HeaderBackgrounds from './HeaderBackgrounds';
import me from './images/me.png';

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
            <img src={me} alt="myself"/>
            <h3>Jacob Mortensen</h3>
            <div className="header-desc"><i>{this.state.headerDesc}</i></div>
        </div>
      </header>
    );
  }
}

export default Header;
