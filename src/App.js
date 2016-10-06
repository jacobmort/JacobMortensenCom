import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';
import Portfolio from './Portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="cards-section">
          {Portfolio.map((project) => {
            return (<Card
              key={project.title}
              title={project.title}
              img={project.img}
              desc={project.desc}
              pageLink={project.pageLink}
              platforms={project.platforms}
              />)
          })}
        </div>
      </div>
    );
  }
}

export default App;
