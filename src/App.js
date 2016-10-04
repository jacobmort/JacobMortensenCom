import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';
import MemoirSS from './images/memoir-ss.png';
import NescafeSS from './images/nescafe-ss.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="cards-section">
          <Card
            title="Memoir Landing Page"
            img={MemoirSS}
            desc="Signup page for Memoir app to increase user signups"
            pageLink="https://www.yourmemoir.com"
            />
            <Card
              title="Nescafe Redesign"
              img={NescafeSS}
              desc="Rebuild of nescafe.com website.  Built on top of tumblr."
              pageLink="http://http://www.nescafe.com/"
              />
        </div>
      </div>
    );
  }
}

export default App;
