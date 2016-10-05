import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';
import portfolio from './portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="cards-section">
          {portfolio.map(function(project) {
            return (<Card
              title={project.title}
              img={project.img}
              desc={project.desc}
              pageLink={project.pageLink}
              />)
          })}
        </div>
      </div>
    );
  }
}

export default App;
