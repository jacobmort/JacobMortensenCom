import React, { Component } from 'react';
import './Header.css';
import me from './me.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div>
            <img src={me} alt="myself"/>
            <h3>Jacob Mortensen</h3>
        </div>
      </header>
    );
  }
}

export default Header;
