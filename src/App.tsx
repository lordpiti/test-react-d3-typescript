import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Test } from './components/Test';
import { BrowserRouter, Route } from 'react-router-dom';
import Route1 from './components/Route1';
import Route2 from './components/Route2';
import ChartTest from './components/ChartTest';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Test></Test>
        <Route path="/" component={() => <Route1 textToDisplay="component to be displayed everywhere" />} />
        <Route path="/route2" exact component={() => <Route2 textToDisplay="component routed" />} />
        <Route path="/route3" exact component={() => <ChartTest textToDisplay="the chart" height={600} width={800} />} />
          {/* <Route path="/teams" component={Teams} />
          <Route path="/competitions" component={Competitions} /> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
